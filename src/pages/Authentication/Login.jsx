/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginWithEmailPassword = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((res) => {
        toast.success('User Logged in Successfully!');
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        toast.success('User Logged in Successfully!');
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }


  return (
    <div className="py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-red-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center">
                Login your account
              </h1>
            </div>
            <form onSubmit={handleLoginWithEmailPassword}>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative top-3">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Enter your Email address"
                  />
                </div>
                <div className="relative top-3">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                </div>
                <div className="relative top-5">
                  <button className="bg-btnColor text-white rounded-md px-2 py-3 w-full">
                    Submit
                  </button>
                </div>
                
              </div>
              
            </div>
            </form>
            <div className="relative top-5">
                  <h1 className="text-xl font-semibold text-center mb-3">
                    Or
                  </h1>
                  <button onClick={handleGoogleSignIn} className="bg-btnColor text-white rounded-md px-2 py-3 w-full">
                    Login with Google
                  </button>
                </div>
                <div className="relative top-5 pt-5">
                  <p className="text-center font-medium">
                  Don't Have An Account? {" "}
                    <Link to="/register">
                      <span className="text-btnColor font-semibold border-b-2 border-btnColor">
                        Register
                      </span>
                    </Link>
                  </p>
                </div>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
