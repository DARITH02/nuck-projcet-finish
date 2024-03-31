import { Outlet } from "react-router-dom";
import AboutList from "../components/AboutList";

const LayOutAboutUs = () => {
  return (
    <div className="container-width container-about">
      <AboutList />
      <Outlet />
    </div>
  );
};

export default LayOutAboutUs;
