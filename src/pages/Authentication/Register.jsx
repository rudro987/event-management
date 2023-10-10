import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [registrationError, setRegistrationError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

    const {registerUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const image = form.get('image');
        const email = form.get("email");
        const password = form.get("password");
        setRegistrationError('');
        setRegistrationSuccess('');

        if(password.length < 6){
          setRegistrationError( 'Password should be at least 6 characters long!');
          return;
        }else if(!/[A-Z]/.test(password)){
          setRegistrationError( 'Your password Should have at least one uppercase character and one special character!');
          return;
        }else if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/.test(password)) {
          setRegistrationError("Password must contain at least one special character.");
          return;
        }
 
        registerUser(email, password)
        .then(res => {
          console.log(res.user)
          updateProfile(res.user, {
            displayName: name,
            photoURL: image
          })
          .then(res => console.log('profile updated'))
          .catch(err => console.log(err.message))

          setRegistrationSuccess('User created successfully');
          setTimeout(() => {
            navigate(location?.state ? location.state : "/");
          }, 1500);
        })
        .catch(err => {
          setRegistrationError(err.message)
        });
    }

    useEffect(() => {
      registrationError && toast.error(registrationError);
      registrationSuccess && toast.success(registrationSuccess);  
    },[registrationError, registrationSuccess]);
    


    return (
        <div className="py-6 flex flex-col justify-center sm:py-12" data-aos="flip-left">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-red-300 to-red-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold text-center">
                Register your account
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
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div className="relative top-3">
                    <input
                      id="image"
                      required
                      name="image"
                      type="text"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Enter your Image URL"
                    />
                  </div>
                  <div className="relative top-3">
                    <input
                      id="email"
                      required
                      name="email"
                      type="email"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Enter your Email address"
                    />
                  </div>
                  <div className="relative top-3">
                    <input
                      id="password"
                      required
                      name="password"
                      type="password"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                  </div>
                  <div className="relative top-5">
                    <button className="bg-btnColor text-white rounded-md px-2 py-3 w-full">
                      Register
                    </button>
                  </div>
                  <div className="relative top-5 pt-5">
                    <p className="text-center font-medium">
                      Already Have An Account? {" "}
                      <Link to="/login">
                        <span className="text-btnColor font-semibold border-b-2 border-btnColor">Login
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              </form>
              <ToastContainer></ToastContainer>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;