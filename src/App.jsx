import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";

import {
  Home,
  About,
  Academic,
  ContaceUs,
  Message,
  EvenAndNew,
  MissionAndVisson,
  OganizeChat,
  UniversityHistory,
} from "../src/page";
import LayOutAboutUs from "./Layout/LayOutAboutUs";
import LayoutAcademic from "./Layout/LayoutAcademic";
import {
  FacultyManagement,
  FacultyArt,
  FacultyDevelopment,
  FacultyScien,
  FacultySocialScien,
} from "./page/AcademicFaculty";

const rout = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        // path: "home",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <LayOutAboutUs />,
        children: [
          {
            index: true,
            element: <About />,
          },
          {
            path: "message",
            element: <Message />,
          },
          {
            path: "evenandnew",
            element: <EvenAndNew />,
          },
          {
            path: "missionandvission",
            element: <MissionAndVisson />,
          },
          {
            path: "oganizechat",
            element: <OganizeChat />,
          },
          {
            path: "history",
            element: <UniversityHistory />,
          },
        ],
      },
      {
        path: "contactus",
        element: <ContaceUs />,
      },
      {
        path: "academic",
        element: <LayoutAcademic />,
        children: [
          {
            index: true,
            element: <Academic />,
          },
          {
            path: "facultymanagement",
            element: <FacultyManagement />,
          },
          {
            path: "facultyarthamanitiesandlanguage",
            element: <FacultyArt />,
          },
          {
            path: "facultyofmanagent",
            element: <FacultyManagement />,
          },
          {
            path: "facultyofcomminunitydevelopment",
            element: <FacultyDevelopment />,
          },
          {
            path: "facultyscienandmathematics",
            element: <FacultyScien />,
          },
          {
            path: "facultysocialofscience",
            element: <FacultySocialScien />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={rout}></RouterProvider>;
};

export default App;
