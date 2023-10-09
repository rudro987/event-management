import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="font-cormorant">
      <div className="max-w-[1440px] mx-auto" data-aos="zoom-out"><Navbar></Navbar></div>
      <div className="min-h-[85vh]"><Outlet></Outlet></div>
      <div data-aos="slide-up"><Footer></Footer></div>
    </div>
  );
};

export default Main;
