"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Drawer, { drawerClasses } from "@mui/material/Drawer";
import { Box, ListItem, ListItemButton } from "@mui/material";

import LocalCafeIcon from "@mui/icons-material/LocalCafe";

import ScrollBar from "../ScrollBar";
import { bgBlur, varAlpha } from "@/theme/styles";

const NavContent = ({ data, slots, workspaces, sx }) => {
  const pathname = usePathname();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          pt: 3,
          pb: 2,
          pl: 2.5,
        }}
      >
        <LocalCafeIcon color="primary" fontSize="large" />
      </Box>

      <ScrollBar fillContent>
        <Box
          component="nav"
          display="flex"
          flex="1 1 auto"
          flexDirection="column"
        >
          <Box component="ul" gap={0.5} display="flex" flexDirection="column">
            {data.map((item) => {
              const isActivated = item.href === pathname;
              return (
                <ListItem
                  disableGutters
                  disablePadding
                  key={item.title}
                  sx={{ gap: 0 }}
                >
                  <ListItemButton
                    LinkComponent={Link}
                    href={item.href}
                    disableGutters
                    sx={{
                      pl: 2.5,
                      pr: 1.5,
                      height: 48,
                      display: "inline-flex",
                      gap: "16px",
                      borderRadius: 0.75,
                      typography: "body2",
                      fontWeight: "fontWeightMedium",
                      color: "var(--layout-nav-item-color)",
                      minHeight: "var(layout-nav-item-height)",
                      ...(isActivated && {
                        fontWeight: "fontWeightSemiBold",
                        bgcolor: "var(--layout-nav-item-active-bg)",
                        color: "var(--layout-nav-itme-active-color)",
                        "&:hover": {
                          bgcolor: "var(--layout-nav-item-hover-bg)",
                        },
                      }),
                    }}
                  >
                    <Box component="span" sx={{ width: 24, height: 24 }}>
                      <item.icon color="primary" />
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        flex: "1 1 auto",
                      }}
                    >
                      {item.title}
                    </Box>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </Box>
        </Box>
      </ScrollBar>
    </>
  );
};

const NavMobile = ({ open, onClose, navItems }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      onClose();
    }
  }, [pathname]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={[
        (theme) => ({
          [`& .${drawerClasses.paper}`]: {
            pt: 2.5,
            overflow: "unset",
            bgcolor: "var(--layout-nav-bg)",
            width: "var(--layout-nav-mobile-width)",
            ...bgBlur({
              color: varAlpha(theme.vars.palette.background.paperChannel, 0.9),
            }),
          },
        }),
        (theme) =>
          theme.applyStyles("dark", {
            [`& .${drawerClasses.paper}`]: {
              ...bgBlur({
                color: varAlpha(
                  theme.vars.palette.background.defaultChannel,
                  0.8
                ),
              }),
            },
          }),
      ]}
    >
      <NavContent data={navItems} />
    </Drawer>
  );
};

export default NavMobile;
