import { InputAdornment, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const ProductsSearch = () => {
  return (
    <>
      <TextField
        sx={{ width: ["100%", 260] }}
        placeholder="Search..."
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </>
  );
};

export default ProductsSearch;
