import { AppBar } from "@mui/material";

import React from "react";

const Navbar = () => {
  return <AppBar sx={styles.navbar}>Pokédex</AppBar>;
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
    backgroundColor: "#74BEB5",
    color: "white",
    position: "fixed",
    top: 0,
    bottom: "auto",
  },
};
