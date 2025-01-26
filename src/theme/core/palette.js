import COLORS from "./colors.json";
import { createPaletteChannel, varAlpha } from "../styles";

export const grey = createPaletteChannel(COLORS.grey);
export const primary = createPaletteChannel(COLORS.primary);
export const secondary = createPaletteChannel(COLORS.secondary);
export const info = createPaletteChannel(COLORS.info);
export const success = createPaletteChannel(COLORS.success);
export const warning = createPaletteChannel(COLORS.warning);
export const error = createPaletteChannel(COLORS.error);
export const common = createPaletteChannel(COLORS.common);

export const text = {
  light: createPaletteChannel({
    primary: grey[800],
    secondary: grey[600],
    disabled: grey[500],
  }),
  dark: createPaletteChannel({
    primary: "#FFFFFF",
    secondary: grey[500],
    disabled: grey[600],
  }),
};

export const background = {
  light: createPaletteChannel({
    paper: "#FFFFFF",
    default: grey[100],
    neutral: grey[200],
  }),
  dark: createPaletteChannel({
    paper: "#1C252E",
    default: grey[900],
    neutral: grey[800],
  }),
};

export const baseAction = {
  hover: varAlpha(grey["500Channel"], 0.08),
  selected: varAlpha(grey["500Channel"], 0.16),
  focus: varAlpha(grey["500Channel"], 0.24),
  disabled: varAlpha(grey["500Channel"], 0.8),
  disabledBackground: varAlpha(grey["500Channel"], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

export const action = {
  light: { ...baseAction, active: grey[600] },
  dark: { ...baseAction, active: grey[500] },
};

export const basePalette = {
  common,
  primary,
  secondary,
  error,
  warning,
  info,
  success,
  grey,
  divieder: varAlpha(grey["500Channel"], 0.2),
  action,
};

export const lightPalette = {
  ...basePalette,
  text: text.light,
  background: background.light,
  action: action.light,
};

export const darkPalette = {
  ...basePalette,
  text: text.dark,
  background: background.dark,
  action: action.dark,
};

export const palette = {
  light: lightPalette,
  dark: darkPalette
};