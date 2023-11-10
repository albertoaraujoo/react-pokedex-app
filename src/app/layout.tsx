import type { Metadata } from "next";
import { Lexend, Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Container from "@mui/material/Container";

const inter = Inter({ subsets: ["latin"] });

const lexend = Lexend({
  weight: "900",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <Container maxWidth="lg">
        <body className={roboto.className}>{children}</body>
      </Container>
      <Footer />
    </html>
  );
}
