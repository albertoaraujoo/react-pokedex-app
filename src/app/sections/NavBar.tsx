import { AppBar } from "@mui/material";
import React from "react";

const Navbar = () => {
  return <AppBar sx={styles.navbar}>Teste</AppBar>;
};

export default Navbar;

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50px",
    backgroundColor: "#74BEB5",
    color: "white",
  },
};
