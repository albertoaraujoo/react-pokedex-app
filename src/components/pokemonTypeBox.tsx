import { PokemonTypeBox } from "@/interfaces/interfaces";
import { Box } from "@mui/material";
import React from "react";

const PokemonTypeBox = ({
  children,
  iconWidth,
  iconHeight,
}: PokemonTypeBox) => {
  return (
    <Box width={iconWidth} height={iconHeight}>
      {children}
    </Box>
  );
};

export default PokemonTypeBox;
