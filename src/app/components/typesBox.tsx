import { Box } from "@mui/material";

import { handleType } from "@/Hooks/useHandleTypes";
import { PokemonTypes } from "../interfaces/interfaces";
import TypeComponent from "./typeComponent";
import { allPokemonTypes } from "./allPokemonTypes";

const TypesBox = (types: PokemonTypes) => {
  return (
    <Box sx={styles.typesBox}>
      <TypeComponent>
        {handleType({ type: `${types.type1}`, list: allPokemonTypes })}
      </TypeComponent>
      <TypeComponent>
        {handleType({ type: `${types.type2}`, list: allPokemonTypes })}
      </TypeComponent>
    </Box>
  );
};

export default TypesBox;

const styles = {
  typesBox: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "5px",
    gap: "6px",
  },
};
