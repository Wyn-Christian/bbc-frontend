"use client";

import { createTheme as createMuiTheme } from "@mui/material/styles";

import { typography } from "./core/typography";
import { palette } from "./core/palette";
import { customShadows } from "./core/custom-shadows";
import { shadows } from "./core/shadows";
import { components } from "./core/components";

const baseTheme = {
  colorSchemes: {
    light: {
      palette: palette.light,
      shadows: shadows.light,
      customShadows: customShadows.light,
    },
    dark: {
      palette: palette.dark,
      shadows: shadows.dark,
      customShadows: customShadows.dark,
    },
  },
  components,
  typography,
  shape: { borderRadius: 8 },
  cssVariables: { cssVarPrefix: "", colorSchemeSelector: "class" },
};

export function createTheme({ themeOverrides = {} } = {}) {
  const theme = createMuiTheme(baseTheme, themeOverrides);

  return theme;
}
