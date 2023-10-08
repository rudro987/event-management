import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-inter">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
