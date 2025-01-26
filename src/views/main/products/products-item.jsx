import Link from "next/link";

import { Box, Card, Link as MuiLink, Stack, Typography } from "@mui/material";
import { fCurrency } from "@/utils/forman-number";

const ProductsItem = ({item}) => {
  const renderImg = (
    <Box
      component="img"
      alt="product name"
      src={`/bbc-frontend/assets/products/product-${item}.png`}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{ color: "text.disabled", textDecoration: "line-through" }}
      >
        {fCurrency(1000 * item)}
      </Typography>
      &nbsp;
      {fCurrency(450 * item)}
    </Typography>
  );

  return (
    <Card>
      <Box sx={{ pt: "100%", position: "relative" }}>{renderImg}</Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        <MuiLink color="inherit" underline="hover" variant="subtitle2" noWrap>
          BBC Product Test {item}
        </MuiLink>

        <Box display="flex" alignItems="center" justifyContent="flex-end">
          {renderPrice}
        </Box>
      </Stack>
    </Card>
  );
};

export default ProductsItem;
