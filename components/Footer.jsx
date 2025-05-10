"use client";

import {
  Box,
  Typography,
  IconButton,
  Stack,
  Divider,
  Link,
  Grid,
} from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#005f9e",
        color: "white",
        px: 4,
        pt: 6,
        pb: 3,
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Logo + Slogan */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Image src="/logo.png" alt="Tugamon Logo" width={140} height={50} />
            <Typography sx={{ fontFamily: "var(--font-fredoka)", mt: 1 }}>
              A tua aventura começa aqui!
            </Typography>
          </Box>
        </Grid>

        {/* Links rápidos */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                fontFamily: "var(--font-fredoka)",
                mb: 1,
              }}
            >
              Ligações úteis
            </Typography>
            <Stack spacing={1}>
              {[
                { label: "Política de Privacidade", href: "/privacidade" },
                { label: "Termos de Uso", href: "/termos" },
                { label: "Contacto", href: "/contacto" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="none"
                  sx={{
                    color: "white",
                    fontFamily: "var(--font-fredoka)",
                    fontSize: "0.95rem",
                    "&:hover": { color: "#F6D775" },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* Redes sociais */}
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                fontFamily: "var(--font-fredoka)",
                mb: 1,
              }}
            >
              Segue-nos
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-end" }}
            >
              <IconButton
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "white", "&:hover": { color: "#F6D775" } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "white", "&:hover": { color: "#F6D775" } }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "white", "&:hover": { color: "#F6D775" } }}
              >
                <YouTubeIcon />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", my: 3 }} />

      <Typography
        variant="body2"
        align="center"
        sx={{ fontSize: "0.9rem", fontFamily: "var(--font-fredoka)" }}
      >
        © {new Date().getFullYear()} Tugamon. Todos os direitos reservados.
      </Typography>
    </Box>
  );
}
