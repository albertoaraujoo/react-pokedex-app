import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./sections/NavBar";
import Footer from "./sections/Footer";
import Container from "@mui/material/Container";

import "./page.module.css";
import IconPokeball from "./components/IconPokeball";

const monteserrat = Montserrat({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokédex",
  description: "Developed by Alberto Araújo - FrontEnd Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monteserrat.className}>
        <Navbar />
        <Container maxWidth="lg">{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
