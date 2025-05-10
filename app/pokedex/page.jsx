"use client";

import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  CircularProgress,
  Chip,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "../../services/supabaseClient";

export default function PokedexPage() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [tugamons, setTugamons] = useState([]);
  const [types, setTypes] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data: typesData } = await supabase.from("types").select("*");
      const { data: tugaData } = await supabase
        .from("tugamons")
        .select(
          "*, type_1_data:types!tugamons_type_1_fkey(*), type_2_data:types!tugamons_type_2_fkey(*)"
        )
        .order("id", { ascending: true });

      setTypes(typesData || []);
      setTugamons(tugaData || []);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredTugamons = tugamons.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

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
      <Typography
        variant="h3"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: "primary.main",
          fontFamily: "var(--font-fredoka)",
        }}
      >
        📘 Pokédex Cultural
      </Typography>

      {/* Search Bar */}
      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar Tugamon..."
        variant="outlined"
        fullWidth
        sx={{ mb: 4, backgroundColor: "white", borderRadius: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {filteredTugamons.map((tuga) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={tuga.id}>
              <Card
                onClick={() => router.push(`/pokedex/${tuga.id}`)}
                sx={{
                  backgroundColor: "#fffef4",
                  border: "3px solid #005f9e",
                  borderRadius: 4,
                  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  ":hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardMedia
                  component={() => (
                    <Box
                      sx={{
                        p: 2,
                        textAlign: "center",
                        backgroundImage: "url(/patterns/azulejo-branco.png)",
                      }}
                    >
                      <Image
                        src={tuga.image_url}
                        alt={tuga.name}
                        width={160}
                        height={160}
                        style={{ borderRadius: "8px" }}
                      />
                    </Box>
                  )}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      fontFamily: "var(--font-fredoka)",
                    }}
                  >
                    {tuga.name}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      mt: 1,
                    }}
                  >
                    {[tuga.type_1_data, tuga.type_2_data]
                      .filter(Boolean)
                      .map((type) => (
                        <Tooltip key={type.id} title={type.name}>
                          <Chip
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
                              fontFamily: "var(--font-fredoka)",
                            }}
                          />
                        </Tooltip>
                      ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
