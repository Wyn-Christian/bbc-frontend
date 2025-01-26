import { Box, Container, Stack, Typography } from "@mui/material";

import CoffeeIcon from "@mui/icons-material/Coffee";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FavoriteIcon from "@mui/icons-material/Favorite";

const coreValues = [
  {
    title: "Passion for Coffee",
    description:
      "We love coffee and strive to perfect every cup, from sourcing beans to brewing.",
    icon: CoffeeIcon,
  },
  {
    title: "Authentic Experiences",
    description: "We create a warm, welcoming atmosphere for every visit.",
    icon: LocalCafeIcon,
  },
  {
    title: "Innovation in Every Sip",
    description:
      "We embrace creativity to make every coffee experience exciting and unique.",
    icon: EmojiObjectsIcon,
  },
  {
    title: "Customer First",
    description:
      "Your satisfaction drives us. We listen, adapt, and serve with care.",
    icon: FavoriteIcon,
  },
];

const CoreValues = () => {
  return (
    <Box component="section" sx={{ textAlign: "center", py: { xs: 5, md: 7 }, bgcolor: "var(--palette-background-neutral)" }}>
      <Container>
        <Typography variant="h2" sx={{ mb: { xs: 5, md: 10 } }}>
          Our Core Values
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} gap={4}>
          {coreValues.map((item, i) => (
            <Box>
              {<item.icon color="primary" sx={{ fontSize: 100 }} />}
              <Typography variant="h5" sx={{ mb: 1, mt: 2 }}>
                {item.title}
              </Typography>
              <Typography color="textSecondary">{item.description}</Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default CoreValues;
