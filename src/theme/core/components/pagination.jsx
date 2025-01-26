import { paginationClasses, paginationItemClasses } from "@mui/material";

const MuiPagination = {
  styleOverrides: {
    root: [
      {
        [`& .${paginationClasses.ul}`]: {
          justifyContent: "center",
        },
        [`& .${paginationItemClasses.root}.Mui-selected`]: {
          color: "var(--palette-common-white)",
          backgroundColor: "var(--palette-text-primary)",
        },
      },
      ({ theme }) =>
        theme.applyStyles("dark", {
          [`& .${paginationItemClasses.root}.Mui-selected`]: {
            color: "var(--palette-grey-800)",
          },
        }),
    ],
  },
};

export default MuiPagination;
