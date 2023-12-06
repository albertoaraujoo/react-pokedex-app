// "use client";
import { Box, Container } from "@mui/material";
import { IdProp } from "@/interfaces/interfaces";
import WeaknessAndResistances from "@/components/WeaknessAndResistances";
import Evolutions from "@/components/Evolutions";
import PokemonBigSoloCard from "@/components/pokemonBigSoloCard";
import BaseStats from "@/components/BaseStats";

const PokemonStats = async ({ id }: IdProp) => {
  return (
    <Container sx={styles.container}>
      <PokemonBigSoloCard id={id} />
      <Box sx={styles.infos}>
        <WeaknessAndResistances id={id} />
        <Evolutions id={id} />
        <BaseStats id={id} />
        <Box sx={styles.evolution}>esfdsf</Box>
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
    justifyContent: "space-evenly",
    flexDirection: "column",
    width: "100%",
    height: "80%",
  },

  evolution: {
    width: "90%",
    height: "160px",
    backgroundColor: "pink",
  },
};
