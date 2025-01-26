"use client";

import {
  Avatar,
  Box,
  ListItemText,
  Rating,
  SvgIcon,
  Typography,
  useTheme,
} from "@mui/material";

import { bgBlur, varAlpha } from "@/theme/styles";

function formatDate(dateInput) {
  const date = new Date(dateInput);
  if (isNaN(date)) return "Invalid Date";

  const options = { day: "2-digit", month: "short", year: "numeric" };
  return date.toLocaleDateString("en-GB", options).replace(",", "");
}

const ReviewItem = ({ name, description, starRating, date }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgBlur(varAlpha(theme.vars.palette.common.whiteChannel, 0.08)),
        backgroundColor: varAlpha(theme.vars.palette.common.whiteChannel, 0.08),
        p: 3,
        gap: 3,
        display: "flex",
        borderRadius: 2,
        color: theme.vars.palette.common.white,
        flexDirection: "column",
      }}
    >
      <SvgIcon
        sx={{
          flexShrink: 0,
          display: "inline-flex",
          opacity: 0.48,
        }}
      >
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          fill="currentColor"
          d="M8.4 6.2a1 1 0 0 1 1.2 1.6c-1.564 1.173-2.46 2.314-2.973 3.31A3.5 3.5 0 1 1 4 14.558a7.6 7.6 0 0 1 .508-3.614C5.105 9.438 6.272 7.796 8.4 6.2m9 0a1 1 0 0 1 1.2 1.6c-1.564 1.173-2.46 2.314-2.973 3.31A3.5 3.5 0 1 1 13 14.558a7.6 7.6 0 0 1 .508-3.614c.598-1.506 1.764-3.148 3.892-4.744"
        />
      </SvgIcon>
      <Typography variant="body2">{description}</Typography>

      <Rating value={starRating} />

      <Box sx={{ display: "flex", gap: 2 }}>
        <Avatar alt={name} />
        <ListItemText
          sx={{ m: 0 }}
          primary={name}
          secondary={formatDate(date)}
          slotProps={{ secondary: { sx: { color: "inherit", opacity: 0.64 } } }}
        />
      </Box>
    </Box>
  );
};

export default ReviewItem;
