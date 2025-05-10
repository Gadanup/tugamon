"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import LanguageSelector from "./LanguageSelector";
const links = [
  { label: "POKÉDEX", href: "/pokedex" },
  { label: "PERSONAGENS", href: "/personagens" },
  { label: "MAPA", href: "/mapa" },
  { label: "SOBRE NÓS", href: "/sobre" },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const renderLinks = () => (
    <Box sx={{ display: "flex", gap: 3 }}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} passHref>
          <Typography
            sx={{
              fontFamily: "var(--font-fredoka)", // <- garante que é Fredoka
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.3rem",
              transition: "color 0.3s ease, transform 0.2s ease",
              "&:hover": {
                color: "#F6D775",
                textDecoration: "none",
                transform: "translateY(-2px)",
              },
              cursor: "pointer",
            }}
          >
            {link.label}
          </Typography>
        </Link>
      ))}
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.png" alt="Tugamon" width={160} height={60} />
          </Link>

          {/* Desktop */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
              {renderLinks()}
              <LanguageSelector />
            </Box>
          )}

          {/* Mobile */}
          {isMobile && (
            <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {links.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={toggleDrawer}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LanguageSelector />
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
