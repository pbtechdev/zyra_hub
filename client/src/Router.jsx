import React from "react";
import { useRoutes } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Home from "./pages/Home";
import Attendance from "./pages/Attendance";
import Profile from "./pages/Profile";
import CreateNewUser from "./pages/CreateNewUser";
import Roles from "./pages/Roles";
import Onboarding from "./pages/Onboarding";
import Login from "./pages/Login";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/attendance",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Attendance />,
        },
      ],
    },
    {
      path: "/users",
      element: <DashboardLayout />,
      children: [
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "create-new-user",
          element: <CreateNewUser />,
        },
        {
          path: "roles",
          element: <Roles />,
        },
      ],
    },
    {
      path: "/onboarding",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Onboarding />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
};

export default Router;
