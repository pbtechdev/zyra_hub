import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/joy";

import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100dvh" }}>
      <Sidebar />
      <Header />
      <Box
        component="main"
        className="MainContent"
        sx={{
          pt: { xs: "calc(12px + var(--Header-height))" },
          pb: { xs: 2, sm: 2, md: 3 },
          px: { xs: 2, sm: 2, md: 3 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100dvh",
          overflow: "auto",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
