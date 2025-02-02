"use client";

import { ThemeProvider as ThemeVarsProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { createTheme } from "./create-theme";

export function ThemeProvider({ themeOverrides, children, ...other }) {
  const theme = createTheme({ themeOverrides });

  return (
    <ThemeVarsProvider disableTransitionOnChange theme={theme} {...other}>
      <CssBaseline />
      {children}
    </ThemeVarsProvider>
  );
}
