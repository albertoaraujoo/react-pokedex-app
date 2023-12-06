"use client";
import { Box } from "@mui/material";
import { handleType, handleColor } from "@/Hooks/useGetColorAndType";
import { PokemonTypes } from "../interfaces/interfaces";
import TypeComponent from "./TypeComponent";
import { allPokemonTypes } from "./AllPokemonTypes";
import PokemonTypeBox from "./PokemonTypeBox";
import { capitalizeFirstLetter } from "@/utils/textFormater";

const TypesBox = ({
  type1,
  type2,
  height,
  width,
  iconHeight,
  iconWidth,
}: PokemonTypes) => {
  return (
    <Box sx={styles.typesBox}>
      <TypeComponent
        title={capitalizeFirstLetter(type1)}
        width={width}
        height={height}
        bgColor={handleColor({ type: `${type1}`, list: allPokemonTypes })}
      >
        <PokemonTypeBox iconWidth={iconWidth} iconHeight={iconHeight}>
          {handleType({ type: `${type1}`, list: allPokemonTypes })}
        </PokemonTypeBox>
      </TypeComponent>
      {type2 ? (
        <TypeComponent
          title={capitalizeFirstLetter(type2)}
          width={width}
          height={height}
          bgColor={handleColor({ type: `${type2}`, list: allPokemonTypes })}
        >
          <PokemonTypeBox iconWidth={iconWidth} iconHeight={iconHeight}>
            {handleType({ type: `${type2}`, list: allPokemonTypes })}
          </PokemonTypeBox>
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
