// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import { Fredoka } from "next/font/google";
import "./globals.css";
import ThemeWrapper from "../components/ThemeWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400"], // ou '700' se quiseres mais espessura
});

export const metadata = {
  title: "Tugamon",
  description: "Site inspirado em Pokémon, feito em Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} antialiased`}
      >
        <body>
          <ThemeWrapper>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Navbar />
              <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
              </Box>
              <Footer />
            </Box>
          </ThemeWrapper>
        </body>
      </body>
    </html>
  );
}
