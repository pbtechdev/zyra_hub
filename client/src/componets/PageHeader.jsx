import React from "react";
import { Typography } from "@mui/joy";

const PageHeader = ({ children }) => {
  return (
    <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
      {children}
    </Typography>
  );
};

export default PageHeader;
