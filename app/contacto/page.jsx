"use client";

import { Box, Typography, Container, TextField, Button } from "@mui/material";

export default function ContactoPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "var(--font-fredoka)" }}
      >
        Contacta-nos
      </Typography>

      <Typography paragraph>
        Tens dúvidas sobre o mundo Tugamon? Problemas técnicos? Envia-nos uma
        mensagem!
      </Typography>

      <Box
        component="form"
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Mensagem enviada com sucesso! (simulação)");
        }}
      >
        <TextField label="Nome" required fullWidth />
        <TextField label="Email" type="email" required fullWidth />
        <TextField label="Mensagem" multiline rows={4} required fullWidth />
        <Button variant="contained" color="primary" type="submit">
          Enviar
        </Button>
      </Box>
    </Container>
  );
}
