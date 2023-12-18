import IconPokeball from "@/components/IconPokeball";
import { AppBar } from "@mui/material";
import Link from "next/link";

import React from "react";

const Navbar = () => {
  return (
    <Link href="/">
      <AppBar sx={styles.navbar}>
        <IconPokeball />
        Pokédex
      </AppBar>
    </Link>
  );
};

export default Navbar;

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50px",
    gap: "10px",
    fontWeight: 700,
    fontSize: "20px",
    backgroundColor: "#18181B",
    color: "white",
    position: "fixed",
    top: 0,
    bottom: "auto",
  },
};
