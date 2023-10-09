/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {

    const {loginUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        loginUser(email, password)
        .then(res => navigate(location?.state ? location.state : "/"))
        .catch(err => console.error(err))
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
            <form onSubmit={handleLogin}>
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
                <div className="relative top-5">
                  <h1 className="text-xl font-semibold text-center mb-3">
                    Or
                  </h1>
                  <button className="bg-btnColor text-white rounded-md px-2 py-3 w-full">
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
              </div>
              
            </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
