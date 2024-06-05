import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="font-customRaleway">
      <div className="h-16">
      <Navbar></Navbar>
      </div>
      
      <div className="">
      <Outlet></Outlet>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default Root;
