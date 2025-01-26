"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// MUI Components
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link as MuiLink,
  Paper,
  Toolbar,
  useColorScheme,
  useTheme,
} from "@mui/material";

import { bgBlur, varAlpha } from "@/theme/styles";

// MUI Icons
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import HelpIcon from "@mui/icons-material/Help";

import NavMobile from "./NavMobile";

const navItems = [
  { title: "Products", href: "/products", icon: EmojiFoodBeverageIcon },
  { title: "About Us", href: "/about-us", icon: InfoIcon },
  { title: "FAQs", href: "/faqs", icon: HelpIcon },
  { title: "Contact Us", href: "/contact-us", icon: CallIcon },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const { mode, setMode } = useColorScheme();

  const theme = useTheme();

  const handleColorModeClick = () => {
    setMode(mode == "light" ? "dark" : "light");
  };

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        boxShadow: "none",
        ...bgBlur({
          color: varAlpha(theme.vars.palette.background.defaultChannel, 0.8),
        }),
      }}
    >
      <Toolbar disableGutters>
        <Container sx={{ height: 1, display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => setNavOpen(true)}
            sx={{
              ml: -1,
              [theme.breakpoints.up("sm")]: { display: "none" },
            }}
          >
            <MenuIcon color="primary" />
          </IconButton>
          <NavMobile
            onClose={() => setNavOpen(false)}
            open={navOpen}
            navItems={navItems}
          />

          <IconButton LinkComponent={Link} href="/" disableRipple>
            <LocalCafeIcon color="primary" fontSize="large" />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}>
            {navItems.map(({ title, href }) => (
              <Button
                disableRipple
                LinkComponent={Link}
                href={href}
                key={title}
                color={pathname == href ? "primary" : "inherit"}
                sx={{
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {title}
              </Button>
            ))}
          </Box>

          <IconButton onClick={handleColorModeClick}>
            {mode == "light" ? (
              <LightModeIcon color="primary" />
            ) : (
              <DarkModeIcon color="primary" />
            )}
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
