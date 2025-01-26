import { Button } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ProductsSort = () => {
  return (
    <>
      <Button endIcon={<ArrowDropDownIcon />} color="inherit">
        Sort by: Feature
      </Button>
    </>
  );
};

export default ProductsSort;
