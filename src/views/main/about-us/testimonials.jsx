"use client";

import { Box, Container, Grid2, Typography, useTheme } from "@mui/material";
import Masonry from "@mui/lab/Masonry";

import ReviewItem from "./review-item";

import { bgGradient, varAlpha } from "@/theme/styles";
import { reviews } from "@/_mock/data";

const Testimonials = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 0 },
        height: { md: 840 },
        ...bgGradient({
          color: `to right, ${varAlpha(
            theme.vars.palette.grey["900Channel"],
            0.8
          )}, ${varAlpha(theme.vars.palette.grey["900Channel"], 0.8)}`,
          imgUrl: "/assets/testimonials-bg.jpg",
        }),
      }}
    >
      <Container sx={{ position: "relative", height: "100%" }}>
        <Grid2
          container
          sx={{
            height: "100%",
            alignItems: "center",
            justifyContent: { xs: "center", md: "space-between" },
            gap: 3,
          }}
        >
          <Grid2 size={{ xs: 10, md: 4 }}>
            <Box
              sx={{
                maxWidth: { md: 360 },
                textAlign: { xs: "center", md: "unset" },
              }}
            >
              <Typography
                variant="overline"
                sx={{ color: "var(--palette-common-white)", opacity: 0.48 }}
              >
                Testimonials
              </Typography>
              <Typography
                variant="h2"
                my={3}
                color="var(--palette-common-white)"
              >
                What our customers are saying
              </Typography>
              <Typography color="var(--palette-common-white)">
                At BBC - Big Black Coffee, our goal is to craft experiences that
                delight you every day. From the first sip to the last, we strive
                to ensure every cup brings joy and satisfaction. That’s why
                we’re always listening to your feedback, constantly improving,
                and working to serve you better.
              </Typography>
            </Box>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 7, lg: 6 }}
            sx={{ height: "100%", alignItems: "center" }}
          >
            <Box
              sx={{
                [theme.breakpoints.up("md")]: {
                  overflowY: "auto",
                  py: 10,
                  height: "100%",
                },
                scrollbarWidth: "none",
                overflowY: "unset",
              }}
            >
              <Masonry columns={{ xs: 1, md: 2 }} spacing={3} sx={{ m: 0 }}>
                {reviews.map((item, i) => (
                  <ReviewItem key={i} {...item} />
                ))}
              </Masonry>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default Testimonials;
