import React from "react";
import { Typography } from "@mui/joy";

const SubHeader = ({ children, ...rest }) => {
  return (
    <Typography level="h5" component="h5" {...rest}>
      {children}
    </Typography>
  );
};

export default SubHeader;
