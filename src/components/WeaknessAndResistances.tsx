import { IdProp } from "@/interfaces/interfaces";
import TypeComponent from "./TypeComponent";
import { handleResitancesAndWeaknesses } from "@/Hooks/useResistancesAndWeaknesses";
import { PokemonSoloStats } from "@/Hooks/useDataFetching";
import PokemonTypeBox from "./PokemonTypeBox";
import { handleColor, handleType } from "@/Hooks/useGetColorAndType";
import { allPokemonTypes } from "./AllPokemonTypes";
import { Box, Container, Divider } from "@mui/material";
import { capitalizeFirstLetter } from "@/utils/textFormater";
import SoloStatsTitle from "./SoloStatsTitle";

const WeaknessAndResistances = async ({ id }: IdProp) => {
  const pokemon = await PokemonSoloStats(id);

  const data = await handleResitancesAndWeaknesses(
    `${pokemon.pokemonData.types[0]?.type?.name}`,
    `${
      pokemon.pokemonData.types.length > 1
        ? pokemon.pokemonData.types[1].type.name
        : ""
    }`
  );

  return (
    <Container sx={styles.container}>
      <Box sx={styles.resistancesAndWeakness}>
        <SoloStatsTitle text="Resistances" />
        <Box sx={styles.resistanceAndWeaknessBox}>
          {data.resistances.map((type: any) => (
            <TypeComponent
              title={capitalizeFirstLetter(type)}
              key={type}
              width="30px"
              height="30px"
              bgColor={handleColor({ type: `${type}`, list: allPokemonTypes })}
            >
              <PokemonTypeBox iconWidth="15px" iconHeight="15px">
                {handleType({ type: `${type}`, list: allPokemonTypes })}
              </PokemonTypeBox>
            </TypeComponent>
          ))}
        </Box>
      </Box>

      <Divider sx={styles.divider} />

      <Box sx={styles.resistancesAndWeakness}>
        <SoloStatsTitle text="Weaknesses" />
        <Box sx={styles.resistanceAndWeaknessBox}>
          {data.weakness.map((type: any) => (
            <TypeComponent
              title={capitalizeFirstLetter(type)}
              key={type}
              width="30px"
              height="30px"
              bgColor={handleColor({ type: `${type}`, list: allPokemonTypes })}
            >
              <PokemonTypeBox iconWidth="15px" iconHeight="15px">
                {handleType({ type: `${type}`, list: allPokemonTypes })}
              </PokemonTypeBox>
            </TypeComponent>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default WeaknessAndResistances;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "160px",
    gap: "15px",
    backgroundColor: "#2F3437",
  },
  resistancesAndWeakness: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },

  resistanceAndWeaknessBox: {
    display: "flex",
    gap: "10px",
  },

  divider: {
    backgroundColor: "#707070",
    width: "100%",
    height: "2px",
  },
};
