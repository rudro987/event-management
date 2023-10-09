import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [loginActive, setLoginActive] = useState(false);
  const [registerActive, setRegisterActive] = useState(false);

  const handleLoginClick = () => {
    setLoginActive(true);
    setRegisterActive(false);
  };

  const handleRegisterClick = () => {
    setLoginActive(false);
    setRegisterActive(true);
  };

  const handeLogOut = () => {
    logOut()
    .then()
    .catch()
  };

  const links = (
    <>
      <li className="text-xl font-semibold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-xl font-semibold">
        <NavLink
          to="/events"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Events
        </NavLink>
      </li>
      <li className="text-xl font-semibold">
        <NavLink
          to="/profile"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className={`navbar bg-base-100 py-10 flex-col gap-5 md:flex-row ${
        loginActive ? "login-active" : registerActive ? "register-active" : ""
      }`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost bg-white md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52 bg-white md:bg-white"
          >
            {links}
          </ul>
        </div>
        <a className="font-bold text-btnColor normal-case text-xl md:text-2xl ">The Party Poppers</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {
        user ?
        <div className="navbar-end flex gap-5">
        <div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-20 rounded-full">
          <img src={user.photoURL || `https://i.ibb.co/sH0Fh3T/user.png`} alt={user.displayName} />
        </div>
      </label>
      </div>
        <div className="text-lg md:text-xl font-semibold">{user.displayName}</div>
        <div><button className="btn text-base w-28 lg:w-full font-semibold bg-btnColor text-white hover:bg-gray-500 hover:text-black" onClick={handeLogOut}>Log Out</button></div>
        </div>
        :
        <div className="navbar-end">
        <Link to="/login" className={`btn border-none text-base font-semibold rounded-l-lg rounded-r-none ${
                loginActive ? "bg-gray-500 text-black hover:bg-gray-500 hover:text-black" : "bg-btnColor text-white hover:bg-gray-500 hover:text-black"
              }`}
              onClick={handleLoginClick}>
          Login
        </Link>
        <Link
          to="/register"
          className={`btn text-base border-none font-semibold rounded-l-none rounded-r-lg ${
                registerActive ? "bg-gray-500 text-black hover:bg-gray-500 hover:text-black" : "bg-btnColor text-white hover:bg-gray-500 hover:text-black"
              }`}
              onClick={handleRegisterClick}
        >
          Register
        </Link>
      </div>
      }
      
    </div>
  );
};

export default Navbar;
