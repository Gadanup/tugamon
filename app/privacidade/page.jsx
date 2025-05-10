"use client";

import { Box, Typography, Container } from "@mui/material";

export default function PoliticaPrivacidadePage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "var(--font-fredoka)" }}
      >
        Política de Privacidade
      </Typography>

      <Typography paragraph>
        A tua privacidade é importante para nós. Esta Política de Privacidade
        explica como recolhemos, utilizamos e protegemos os teus dados no site{" "}
        <strong>Tugamon</strong>.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Dados que recolhemos
      </Typography>
      <Typography paragraph>
        Podemos recolher informações como nome, e-mail, localização,
        preferências de idioma, e dados anónimos de navegação.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Como usamos os teus dados
      </Typography>
      <Typography paragraph>
        Utilizamos os teus dados para melhorar a experiência no site,
        personalizar conteúdo e enviar notificações relacionadas com o mundo
        Tugamon (se autorizares).
      </Typography>

      <Typography variant="h6" gutterBottom>
        Partilha de dados
      </Typography>
      <Typography paragraph>
        Nunca vendemos os teus dados. Podemos partilhar com parceiros de
        confiança que ajudam a operar o nosso serviço, desde que cumpram os
        mesmos níveis de privacidade.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Segurança
      </Typography>
      <Typography paragraph>
        Implementamos medidas técnicas para proteger os teus dados. No entanto,
        nenhum sistema é 100% seguro.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Os teus direitos
      </Typography>
      <Typography paragraph>
        Podes solicitar acesso, correção ou eliminação dos teus dados através da
        nossa página de contacto.
      </Typography>

      <Typography paragraph>Última atualização: Maio 2025</Typography>
    </Container>
  );
}
