"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HeroBanner() {
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "50vh", md: "95vh" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: { xs: 0, md: 0 },
        px: 2,
      }}
    >
      {/* Background image */}
      <Image
        src="/ponte.png"
        alt="Tugamon Hero"
        fill
        priority
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      {/* Overlay content */}
      <Box
        sx={{
          textAlign: "center",
          zIndex: 1,
          maxWidth: "90%",
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/logo.png"
            alt="Tugamon Logo"
            width={480}
            height={200}
            style={{ margin: "0 auto" }}
          />
        </motion.div>

        {/* Subtítulo */}
        <Typography
          variant="h5"
          component={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          sx={{
            color: "white",
            mb: 3,
            fontWeight: "bold",
            textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
          }}
        >
          Explora Portugal como nunca antes — encontra e apanha todos os
          Tugamons!
        </Typography>

        {/* Botão */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#F6D775",
              color: "#000",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              fontSize: "1.2rem",
              borderRadius: 4,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "#ffea9c",
                transform: "scale(1.05)",
              },
            }}
            onClick={() => router.push("/pokedex")}
          >
            Começar Aventura
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}
