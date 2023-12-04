// "use client";
import { Box, Container, Typography } from "@mui/material";
import { IdProp } from "@/interfaces/interfaces";
import PokemonBigSoloCard from "@/components/pokemonBigSoloCard";
import WeaknessAndResistances from "@/components/WeaknessAndResistances";

const PokemonStats = async ({ id }: IdProp) => {
  return (
    <Container sx={styles.container}>
      <PokemonBigSoloCard id={id} />
      <Box sx={styles.infos}>
        <WeaknessAndResistances id={id} />
        <Box sx={styles.baseData}></Box>
        <Box sx={styles.evolution}></Box>
        <Box sx={styles.stats}></Box>
      </Box>
    </Container>
  );
};

export default PokemonStats;

const styles = {
  container: {
    marginTop: "50px",
    display: "flex",
    height: "100dvh",
    color: "white",
  },
  infos: {
    width: "100%",
    height: "50%",
    backgroundColor: "blue",
  },
  baseData: {
    width: "100%",
    height: "50%",
    backgroundColor: "green",
  },
  WeaknessesAndResistances: {
    width: "100%",
    height: "50%",
    backgroundColor: "yellow",
  },
  evolution: {
    width: "100%",
    height: "50%",
    backgroundColor: "pink",
  },
  stats: {
    width: "100%",
    height: "50%",
    backgroundColor: "purple",
  },
};
