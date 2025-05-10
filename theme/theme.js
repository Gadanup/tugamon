import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#005f9e",
    },
    background: {
      default: "#FAF1D0", // Cor de fundo global
    },
  },
  typography: {
    fontFamily: "var(--font-fredoka), sans-serif",
  },
});

export default theme;
