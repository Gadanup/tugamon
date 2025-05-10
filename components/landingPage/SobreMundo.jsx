"use client";

import { Box, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SobreMundo() {
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#FAF1D0",
        backgroundImage: "url(/patterns/azulejo3.png)",
        backgroundRepeat: "repeat",
        backgroundSize: "180px",
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 4, md: 10 },
        overflow: "hidden",
      }}
    >
      {/* Tugamons flutuantes */}
      <Image
        src="/tugamons/no-background/004-Nautinho.png"
        alt="Nautinho"
        width={80}
        height={80}
        style={{
          position: "absolute",
          top: 30,
          left: 30,
          zIndex: 1,
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <Image
        src="/tugamons/no-background/001-galico.png"
        alt="Guitamon"
        width={80}
        height={80}
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          zIndex: 1,
          animation: "float 7s ease-in-out infinite",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 6,
        }}
      >
        {/* Imagem */}
        <Box sx={{ flex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/serra.png"
              alt="Mundo Tugamon"
              width={700}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
              }}
            />
          </motion.div>
        </Box>

        {/* Texto */}
        <Box sx={{ flex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Box
              sx={{
                backgroundColor: "#fffef4",
                backgroundImage: "url(/patterns/azulejo-branco.png)",
                backgroundRepeat: "repeat",
                border: "3px solid #005f9e",
                borderRadius: 4,
                p: 4,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                fontFamily: "var(--font-fredoka)",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "#005f9e",
                  fontFamily: "var(--font-fredoka)",
                  fontSize: "2.5rem",
                }}
              >
                🌍 Sobre o Mundo Tugamon
              </Typography>

              <Typography
                paragraph
                sx={{ lineHeight: 1.5, fontSize: "1.2rem" }}
              >
                Após uma explosão misteriosa nas{" "}
                <strong>Penhas Douradas</strong>, criaturas incríveis chamadas{" "}
                <strong>Tugamons</strong> começaram a aparecer por todo o
                território!
              </Typography>

              <Typography
                paragraph
                sx={{ lineHeight: 1.5, fontSize: "1.2rem" }}
              >
                Desde os campos do Alentejo até às falésias da Madeira, cada
                região esconde Tugamons únicos inspirados na nossa gastronomia,
                folclore, e história. A tua missão? Descobri-los. Recolhê-los.
                Tornar-te num verdadeiro Mestre Tugamon!
              </Typography>

              <Button
                onClick={() => router.push("/pokedex")}
                sx={{
                  mt: 3,
                  backgroundColor: "#F6D775",
                  color: "#000",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.2,
                  borderRadius: 3,
                  fontSize: "1rem",
                  border: "2px solid #c9a634",
                  boxShadow: "0 4px 0 #d8b948",
                  "&:hover": {
                    backgroundColor: "#ffea9c",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                ⚔️ Explorar Pokédex
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Box>
      {/* Flutuação Keyframes */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </Box>
  );
}
