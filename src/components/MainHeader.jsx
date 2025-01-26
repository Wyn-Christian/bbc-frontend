"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";

import { bgGradient, varAlpha } from "@/theme/styles";

const MainHeader = ({ imgUrl, title, subtitle, description, children }) => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        height: { md: 500 },
        py: { xs: 10, md: 0 },
        overflow: "hidden",
        position: "relative",
        ...bgGradient({
          color: `to right, ${varAlpha(
            theme.vars.palette.grey["900Channel"],
            0.8
          )}, ${varAlpha(theme.vars.palette.grey["900Channel"], 0.8)}`,
          imgUrl,
        }),
      }}
    >
      <Container>
        <Box
          sx={{
            [theme.breakpoints.up("md")]: {
              position: "absolute",
              textAlign: "unset",
              bottom: 80,
            },
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography variant="h1">
            <Box component="span" display="block" color="primary.main">
              {title}
            </Box>
            <Box component="span" color="white">
              {subtitle}
            </Box>
          </Typography>
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default MainHeader;
