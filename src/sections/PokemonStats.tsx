"use client";
import { Box, Container } from "@mui/material";
import { PokemonSoloStats } from "@/Hooks/useDataFetching";
import { IdProp } from "@/interfaces/interfaces";

const PokemonStats = async ({ id }: IdProp) => {
  const pokemon = await PokemonSoloStats(id);

  console.log(pokemon);

  return (
    <Container sx={styles.container}>
      <Box sx={styles.pokemon}></Box>
      <Box sx={styles.infos}>
        <Box sx={styles.baseData}></Box>
        <Box sx={styles.WeaknessesAndResistances}></Box>
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
  pokemon: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
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
