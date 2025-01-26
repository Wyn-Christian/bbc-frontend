const MuiTextField = {
  styleOverrides: {
    root: ({ theme }) => ({
      "& .MuiInputLabel-shrink.Mui-focused": {
        color: theme.vars.palette.text.primary,
      },
    }),
  },
};

export default MuiTextField;
