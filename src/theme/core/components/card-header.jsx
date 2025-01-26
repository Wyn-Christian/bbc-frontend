const MuiCardHeader = {
  defaultProps: {
    titleTypographyProps: { variant: "h6" },
    subheaderTypographyProps: { varient: "body2" },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3, 3, 0),
    }),
  },
};

export default MuiCardHeader;
