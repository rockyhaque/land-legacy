import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Root = () => {
  useEffect(() => {
    AOS.init(
      {duration: 2000}
    );
  }, [])
  return (
    <div className="font-customRaleway">
      <div className="h-16">
      <Navbar></Navbar>
      </div>
      
      <div className="max-w-screen-xl mx-auto">
      <Outlet></Outlet>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default Root;
