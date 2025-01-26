const MuiButton = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    contained: [
      ({ theme }) =>
        theme.applyStyles("dark", {
          color: theme.vars.palette.grey[800],
          backgroundColor: theme.vars.palette.common.white,
          "&:hover": {
            backgroundColor: theme.vars.palette.grey[400],
            boxShadow: theme.vars.customShadows.z8,
          },
        }),
    ],
    sizeLarge: {
      minHeight: 48,
    },
  },
};

export default MuiButton;
