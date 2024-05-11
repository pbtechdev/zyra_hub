import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

import GlobalStyles from "./GlobalStyles";

const ThemeProvider = ({ children }) => {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </CssVarsProvider>
  );
};

export default ThemeProvider;
