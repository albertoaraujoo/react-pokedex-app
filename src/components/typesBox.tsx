"use client";
import { Box } from "@mui/material";
import { handleType, handleColor } from "@/Hooks/useGetColorAndType";
import { PokemonTypes } from "../interfaces/interfaces";
import TypeComponent from "@/components/TypeComponent";
import { allPokemonTypes } from "@/utils/AllPokemonTypes";
import { capitalizeFirstLetter } from "@/utils/textFormater";
import PokemonTypeBox from "@/components/PokemonTypeBox";

const TypesBox = ({
  type1,
  type2,
  height,
  width,
  iconHeight,
  iconWidth,
}: PokemonTypes) => {
  return (
    <Box sx={styles.TypesBoxStyles}>
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
  TypesBoxStyles: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "5px",
    gap: "10%",
  },
};
