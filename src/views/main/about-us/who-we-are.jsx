"use client";

import { varAlpha } from "@/theme/styles";
import { Box, Container, Grid2, Typography } from "@mui/material";

const ImageItem = ({ aspectRatio, src }) => (
  <Box
    sx={[
      (theme) => ({
        maxWidth: "100%",
        overflow: "hidden",
        position: "relative",
        display: "inline-block",
        verticalAlign: "bottom",
        aspectRatio,
        width: "100%",
        borderRadius: 3,
        boxShadow: `-40px 40px 80px ${varAlpha(
          theme.vars.palette.grey["500Channel"],
          0.24
        )}`,
      }),
      (theme) =>
        theme.applyStyles("dark", {
          boxShadow: `-40px 40px 80px ${varAlpha(
            theme.vars.palette.common.blackChannel,
            0.24
          )}`,
        }),
    ]}
  >
    <Box
      component="img"
      alt={src}
      src={src}
      sx={{
        height: "100%",
        width: "100%",
        display: "inherit",
        aspectRatio: "inherit",
        borderRadius: "inherit",
        objectFit: "cover",
      }}
    />
  </Box>
);

const WhoWeAre = () => {
  return (
    <Box component="section" sx={{ overflow: "hidden" }}>
      <Container
        sx={{
          py: { xs: 10, md: 15 },
          textAlign: { xs: "center", md: "unset" },
        }}
      >
        <Grid2 container alignItems="flex-start">
          <Grid2
            container
            size={{ xs: 12, md: 6, lg: 7 }}
            spacing={3}
            sx={{
              display: { xs: "none", md: "flex" },
              pr: { md: 7 },
              alignItems: "center",
            }}
          >
            <Grid2 size={6}>
              <ImageItem aspectRatio="1/1" src="/assets/about-us-1.jpg" />
            </Grid2>
            <Grid2 size={6}>
              <ImageItem aspectRatio="3/4" src="/assets/about-us-2.jpg" />
            </Grid2>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6, lg: 5 }}>
            <Typography variant="h2" mb={3}>
              The "Why" Behind BBC
            </Typography>
            <Typography color="textSecondary" mb={2}>
              At BBC - Big Black Coffee, we believe coffee is more than just a
              drink—it’s a ritual, a connection, and a source of inspiration.
              Our journey began with a simple vision: to create a space where
              exceptional coffee meets community, and every cup becomes a moment
              to savor.
            </Typography>
            <Typography color="textSecondary">
              We exist to bring people together, whether it’s through a shared
              love for bold flavors, a cozy space to unwind, or the joy of
              discovering your next favorite brew. BBC is here to make your
              daily coffee experience extraordinary—because life’s too short for
              anything less than great coffee.
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
