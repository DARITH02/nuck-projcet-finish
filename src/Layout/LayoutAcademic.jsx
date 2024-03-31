import React from "react";
import AcademicList from "../components/AcademicList";
import { Outlet } from "react-router-dom";

const LayoutAcademic = () => {
  return (
    <div className="container-width academic-container">
      <AcademicList />
      <Outlet />
    </div>
  );
};

export default LayoutAcademic;
