import { Box, Container } from "@mui/material";
import { IdProp } from "@/interfaces/interfaces";
import { PokemonSoloStats } from "@/Hooks/useDataFetching";
import WeaknessAndResistances from "@/components/WeaknessAndResistances";
import Evolutions from "@/components/Evolutions";
import BaseStats from "@/components/BaseStats";
import { handleColor } from "@/Hooks/useGetColorAndType";
import { allPokemonTypes } from "@/components/AllPokemonTypes";
import Shiny from "@/components/Shiny";
import PokemonBigSoloCard from "@/components/pokemonBigSoloCard";

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
    marginTop: { xs: "100px", lg: "30px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: { xs: "column", lg: "row" },
    minHeight: { xs: "fit-content", sm: "fit-content", md: "100dvh" },
    color: "#FFFFFF",
    width: "90%",
    gap: { xs: "25px", lg: 0 },
    marginBottom: "20px",
  },
  infos: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    flexDirection: "column",
    width: { xs: "110%", md: "90%" },
    height: "80%",
  },
};
