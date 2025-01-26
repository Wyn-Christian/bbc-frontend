import { outlinedInputClasses } from "@mui/material/OutlinedInput";

import { varAlpha } from "@/theme/styles";

const MuiOutlinedInput = {
  styleOverrides: {
    root: ({ theme }) => ({
      [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.vars.palette.text.primary,
      },
    }),
    notchedOutline: [
      ({ theme }) => ({
        borderColor: varAlpha(theme.vars.palette.grey["900Channel"], 0.2),
      }),
      ({ theme }) =>
        theme.applyStyles("dark", {
          borderColor: varAlpha(theme.vars.palette.grey["400Channel"], 0.2),
        }),
    ],
  },
};

export default MuiOutlinedInput;
