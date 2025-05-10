"use client";

import { Box, Typography, Container } from "@mui/material";

export default function TermosPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "var(--font-fredoka)" }}
      >
        Termos de Uso
      </Typography>

      <Typography paragraph>
        Ao acederes ao site <strong>Tugamon</strong>, concordas com os seguintes
        termos.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Utilização do conteúdo
      </Typography>
      <Typography paragraph>
        Todo o conteúdo é propriedade do projeto Tugamon e não pode ser copiado,
        distribuído ou modificado sem autorização prévia.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Conta e conduta
      </Typography>
      <Typography paragraph>
        Ao criares uma conta, comprometes-te a fornecer informações verdadeiras
        e a respeitar a comunidade.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Limitações de responsabilidade
      </Typography>
      <Typography paragraph>
        O Tugamon não se responsabiliza por interrupções temporárias, bugs, ou
        dados perdidos durante o uso da plataforma.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Modificações
      </Typography>
      <Typography paragraph>
        Podemos alterar estes termos a qualquer momento. A versão mais recente
        estará sempre nesta página.
      </Typography>

      <Typography paragraph>Última atualização: Maio 2025</Typography>
    </Container>
  );
}
