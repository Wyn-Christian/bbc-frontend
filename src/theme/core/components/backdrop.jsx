import { varAlpha } from "@/theme/styles";

const MuiBackdrop = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: varAlpha(theme.vars.palette.grey["900Channel"], 0.8),
    }),
    invisible: {
      background: "transparent",
    },
  },
};

export default MuiBackdrop;
