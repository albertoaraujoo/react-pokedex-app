import { Box, Container } from "@mui/material";
import { IdProp } from "@/interfaces/interfaces";
import { PokemonSoloStats } from "@/Hooks/useDataFetching";
import WeaknessAndResistances from "@/components/WeaknessAndResistances";
import Evolutions from "@/components/Evolutions";
import BaseStats from "@/components/BaseStats";
import PokemonBigSoloCard from "@/components/PokemonBigSoloCard";
import { handleColor } from "@/Hooks/useGetColorAndType";
import { allPokemonTypes } from "@/components/AllPokemonTypes";
import Shiny from "@/components/Shiny";

const PokemonStats = async ({ id }: IdProp) => {
  const pokemon = await PokemonSoloStats(id);

  const color = handleColor({
    type: pokemon?.pokemonData.types[0].type.name,
    list: allPokemonTypes,
  });

  return (
    <Container sx={styles.container}>
      <PokemonBigSoloCard pokemon={pokemon} />
      <Box sx={styles.infos}>
        <WeaknessAndResistances pokemon={pokemon} color={color} />
        <Evolutions pokemon={pokemon} color={color} />
        <BaseStats pokemon={pokemon} color={color} />
        <Shiny pokemon={pokemon} color={color} />
      </Box>
    </Container>
  );
};

export default PokemonStats;

const styles = {
  container: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100dvh",
    color: "#FFFFFF",
  },
  infos: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    flexDirection: "column",
    width: "100%",
    height: "80%",
  },
};
