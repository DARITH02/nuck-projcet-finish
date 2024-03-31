import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Scroll from "../Scroll";
import SlidePartNer from "../SlidePartNer";
import { Copyright } from "lucide-react";
const RootLayout = () => {
  return (
    <div className="container-fluid">
      <nav className="nav-container">
        <Scroll />
        <Navbar />
      </nav>
      <Outlet />
      <SlidePartNer />
      <div className="footer-container">
        <Footer />
      </div>
      <p className="developer">
        <Copyright size={10} strokeWidth={1} />
        COPYRIGHT NATIONALE UNIVERSITY OF CHEASIM KAMCHAYMEAR | DEVELOPE BY
        DARITH 2024
      </p>
    </div>
  );
};

export default RootLayout;
