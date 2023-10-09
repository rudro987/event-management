import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-cormorant">
      <Navbar></Navbar>
      <div className="min-h-[85vh]"><Outlet></Outlet></div>
      
      <Footer></Footer>
    </div>
  );
};

export default Main;
