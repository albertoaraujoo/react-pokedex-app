import IconPokeball from "@/components/IconPokeball";
import { AppBar } from "@mui/material";

import React from "react";

const Navbar = () => {
  return (
    <AppBar sx={styles.navbar}>
      <IconPokeball />
      Pokédex
    </AppBar>
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
