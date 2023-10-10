import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const auth = getAuth(app);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(user);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const image = form.get("image");

    const profileUpdates = {
      displayName: name,
      photoURL: image,
    };

    updateProfile(auth.currentUser, profileUpdates)
      .then((res) => {
        setLoading(true);
        toast("User updated successfully");
        navigate(location?.state ? location.state : "/profile");
      })
      .catch((err) => console.log(err));
  };

  return (
      <div className="flex-col flex lg:flex-row gap-20 justify-around max-w-[1440px] mx-auto lg:p-28">
        <div className="mt-10 mb-20 lg:mb-0" data-aos="flip-right">
          <div className="relative flex w-full  md:w-1/2 mx-auto lg:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 block text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {user.displayName}
              </h4>
              <p className="block text-btnColor font-medium leading-relaxed text-2xl">
                {user.email}
              </p>
            </div>
            <div className="flex justify-center gap-7 p-6 pt-2">
              <a
                href="#facebook"
                className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
              <a
                href="#twitter"
                className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a
                href="#instagram"
                className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div
            className="py-6 flex flex-col justify-center sm:py-12"
            data-aos="flip-left"
          >
            <div className="relative py-3 w-96 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-red-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                  <div>
                    <h1 className="text-2xl font-semibold text-center">
                      Update your profile
                    </h1>
                  </div>
                  <form onSubmit={handleRegister}>
                    <div className="divide-y divide-gray-200">
                      <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="relative top-3">
                          <input
                            id="name"
                            required
                            name="name"
                            type="text"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                            placeholder="Change Display Name"
                          />
                        </div>
                        <div className="relative top-3">
                          <input
                            id="image"
                            required
                            name="image"
                            type="text"
                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                            placeholder="Change Profile Picture"
                          />
                        </div>

                        <div className="relative top-5">
                          <button className="bg-btnColor text-white rounded-md px-2 py-3 w-full">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <ToastContainer></ToastContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Profile;
