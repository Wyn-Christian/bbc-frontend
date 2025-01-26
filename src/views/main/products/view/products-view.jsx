import {
  Box,
  Container,
  Grid2,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";

import ProductsFilter from "../products-filter";
import ProductsSort from "../products-sort";
import ProductsSearch from "../products-search";
import ProductsPagination from "../products-pagination";
import ProductsItem from "../products-item";

const ProductsView = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ my: { xs: 3, md: 5 } }}>
        Products
      </Typography>

      <Stack
        sx={{ mb: [3, 5] }}
        direction={["column", "row"]}
        justifyContent="space-between"
        alignItems={["flex-end", "center"]}
        gap={3}
      >
        <ProductsSearch />

          <Stack direction="row" gap={1}>
            <ProductsFilter />
          <ProductsSort />
        </Stack>
      </Stack>

      <Grid2 container spacing={{xs: 1, sm: 2}}>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((item) => (
          <Grid2 key={item} size={{ xs: 6, sm: 4, md: 3 }}>
            <ProductsItem item={item} />
          </Grid2>
        ))}
      </Grid2>

      <ProductsPagination />
    </Container>
  );
};

export default ProductsView;
