import { Button } from "@mui/material";

import FilterListIcon from "@mui/icons-material/FilterList";

const ProductsFilter = () => {
  return (
    <>
      <Button endIcon={<FilterListIcon />} color="inherit">
        Filters
      </Button>
    </>
  );
};

export default ProductsFilter;
