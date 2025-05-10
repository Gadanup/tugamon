"use client";

import {
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

const languages = [
  { code: "en", label: "English", flag: "/flags/usa.png" },
  { code: "pt", label: "Português", flag: "/flags/pt.png" },
  { code: "es", label: "Español", flag: "/flags/es.png" },
  { code: "fr", label: "Français", flag: "/flags/fr.png" },
  { code: "it", label: "Italiano", flag: "/flags/it.png" },
];

export default function LanguageSelector() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLang, setSelectedLang] = useState("pt"); // default: português
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (code) => {
    setSelectedLang(code);
    setAnchorEl(null);
    // Aqui podes adicionar lógica de mudança de idioma (i18n, cookies, etc)
  };

  const currentLang = languages.find((lang) => lang.code === selectedLang);

  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          px: 1.2,
          py: 0.8,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "#F6D775",
          },
        }}
      >
        <Image
          src={currentLang.flag}
          alt={currentLang.label}
          width={24}
          height={24}
        />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          elevation: 4,
          sx: {
            mt: 1,
            borderRadius: 2,
            minWidth: 160,
            px: 1,
          },
        }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleClose(lang.code)}
            selected={lang.code === selectedLang}
          >
            <ListItemIcon>
              <Image src={lang.flag} alt={lang.label} width={20} height={20} />
            </ListItemIcon>
            <ListItemText>
              <Typography>{lang.label}</Typography>
            </ListItemText>
            {lang.code === selectedLang && (
              <CheckIcon fontSize="small" sx={{ color: "#4caf50" }} />
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
