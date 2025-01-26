const MuiCard = {
  styleOverrides: {
    root: ({ theme }) => ({
      zIndex: 0,
      position: "relative",
      boxShadow: theme.customShadows.card,
      borderRadius: theme.shape.borderRadius * 2,
    }),
  },
};

export default MuiCard;
