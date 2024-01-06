import TypeComponent from "@/app/components/TypeComponent";
import { handleResitancesAndWeaknesses } from "@/app/Hooks/useResistancesAndWeaknesses";
import PokemonTypeBox from "@/app/components/PokemonTypeBox";
import { handleColor, handleType } from "@/app/Hooks/useGetColorAndType";
import { allPokemonTypes } from "@/app/utils/AllPokemonTypes";
import { Box, Container, Divider } from "@mui/material";
import { capitalizeFirstLetter } from "@/app/utils/textFormater";
import SoloStatsTitle from "@/app/components/SoloStatsTitle";
import { WeaknessAndResistancesProps } from "@/app/interfaces/interfaces";

const WeaknessAndResistances = async ({
  pokemon,
  color,
}: WeaknessAndResistancesProps) => {
  const data = await handleResitancesAndWeaknesses(
    `${pokemon.pokemonData.types[0]?.type?.name}`,
    `${
      pokemon.pokemonData.types.length > 1
        ? pokemon.pokemonData.types[1].type.name
        : ""
    }`
  );

  return (
    <Container sx={styles.container(color)}>
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
  container: (color: WeaknessAndResistancesProps) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: "100%", md: "90%" },
    minHeight: "170px",
    gap: "15px",
    backgroundColor: "#2F3437",
    paddingBottom: "10px",
    borderTop: `5px solid ${color}`,
  }),
  resistancesAndWeakness: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  },

  resistanceAndWeaknessBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
  },

  divider: {
    backgroundColor: "#707070",
    width: "100%",
    height: "2px",
  },
};
