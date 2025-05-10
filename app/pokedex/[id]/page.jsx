"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../services/supabaseClient";
import {
  Box,
  Typography,
  Chip,
  CircularProgress,
  Grid,
  Divider,
  Paper,
} from "@mui/material";
import Image from "next/image";

export default function TugamonDetailPage() {
  const { id } = useParams();
  const [tugamon, setTugamon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTugamon = async () => {
      setLoading(true);
      const { data } = await supabase
        .from("tugamons")
        .select(
          "*, type_1_data:types!tugamons_type_1_fkey(*), type_2_data:types!tugamons_type_2_fkey(*)"
        )
        .eq("id", id)
        .single();
      setTugamon(data);
      setLoading(false);
    };

    if (id) fetchTugamon();
  }, [id]);

  if (loading || !tugamon) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  const {
    name,
    image_url,
    description,
    inspiration,
    height,
    weight,
    type_1_data,
    type_2_data,
  } = tugamon;

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 6 },
        backgroundImage: "url(/patterns/azulejo3.png)",
        backgroundRepeat: "repeat",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* Imagem */}
        <Grid item xs={12} md={5}>
          <Image
            src={image_url}
            alt={name}
            width={400}
            height={400}
            style={{ borderRadius: "16px" }}
          />
        </Grid>

        {/* Conteúdo */}
        <Grid item xs={12} md={7}>
          <Paper
            elevation={4}
            sx={{ p: 4, borderRadius: 4, backgroundColor: "#fffef4" }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {name}
            </Typography>

            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              {[type_1_data, type_2_data].filter(Boolean).map((type) => (
                <Chip
                  key={type.id}
                  label={type.name}
                  avatar={
                    <Image
                      src={type.icon_url}
                      alt={type.name}
                      width={20}
                      height={20}
                    />
                  }
                  sx={{
                    backgroundColor: type.color,
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                />
              ))}
            </Box>

            <Typography variant="body1" paragraph>
              {description}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" fontWeight="bold">
              Inspiração Cultural:
            </Typography>
            <Typography variant="body2" paragraph>
              {inspiration}
            </Typography>

            <Typography variant="h6" fontWeight="bold">
              Altura / Peso:
            </Typography>
            <Typography variant="body2">
              {height} m / {weight} kg
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
