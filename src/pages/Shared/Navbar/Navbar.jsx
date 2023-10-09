import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
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
    <div className="navbar bg-base-100 py-10 flex-col lg:flex-row" data-aos="zoom-out">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost bg-white lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52 bg-white"
          >
            {links}
          </ul>
        </div>
        <a className="font-bold text-btnColor normal-case text-xl lg:text-4xl ">The Party Poppers</a>
      </div>
      <div className="navbar-center hidden lg:flex">
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
        <div className="text-xl font-semibold">{user.displayName}</div>
        <div><button className="btn text-base w-28 lg:w-full md:text-xl font-semibold bg-btnColor text-white hover:bg-gray-500 hover:text-black" onClick={handeLogOut}>Log Out</button></div>
        </div>
        :
        <div className="navbar-end">
        <Link to="/login" className="btn text-xl font-semibold rounded-l-lg rounded-r-none bg-[#F75B5F] text-white hover:bg-gray-500 hover:text-black">
          Login
        </Link>
        <Link
          to="/register"
          className="btn text-xl font-semibold rounded-l-none rounded-r-lg bg-[#F75B5F] text-white hover:bg-gray-500 hover:text-black"
        >
          Register
        </Link>
      </div>
      }
      
    </div>
  );
};

export default Navbar;
