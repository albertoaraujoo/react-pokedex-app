import { Box } from "@mui/material";
import { handleType, handleColor } from "@/Hooks/useGetColorAndType";
import { PokemonTypes } from "../interfaces/interfaces";
import TypeComponent from "./typeComponent";
import { allPokemonTypes } from "./allPokemonTypes";

const TypesBox = ({ type1, type2, height, width }: PokemonTypes) => {
  return (
    <Box sx={styles.typesBox}>
      <TypeComponent
        width={width}
        height={height}
        bgColor={handleColor({ type: `${type1}`, list: allPokemonTypes })}
      >
        {handleType({ type: `${type1}`, list: allPokemonTypes })}
      </TypeComponent>
      {type2 ? (
        <TypeComponent
          width={width}
          height={height}
          bgColor={handleColor({ type: `${type2}`, list: allPokemonTypes })}
        >
          {handleType({ type: `${type2}`, list: allPokemonTypes })}
        </TypeComponent>
      ) : null}
    </Box>
  );
};

export default TypesBox;

const styles = {
  typesBox: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "5px",
    gap: "10%",
  },
};
