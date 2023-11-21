import { Toolbar, Box } from "@mui/material";

import React from "react";

const Footer = () => {
  return (
    <Box color="primary" sx={styles.footer}>
      Footer
    </Box>
  );
};

export default Footer;

const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "50px",
    backgroundColor: "#1B2021",
    color: "white",
    top: "auto",
    bottom: 0,
  },
};
