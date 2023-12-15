"use client";
import Arrow from "@/components/Arrow";
import { AppBar, Box } from "@mui/material";
import { usePathname } from "next/navigation";

import React from "react";

const Navbar = () => {
  const url = usePathname();
  console.log(url);
  return (
    <AppBar sx={styles.navbar}>
      <Arrow
        color="#FFFFFF"
        direction={false}
        height="30px"
        width="30px"
        onClick={() => {
          console.log("botão massa");
        }}
      />

      <Box>Pokédex</Box>
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
    backgroundColor: "#74BEB5",
    color: "white",
    position: "fixed",
    top: 0,
    bottom: "auto",
  },
};
