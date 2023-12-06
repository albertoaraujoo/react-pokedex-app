import { Container } from "@mui/material";
import React from "react";
import { PokemonSoloStats } from "@/Hooks/useDataFetching";
import { BaseStat, IdProp } from "@/interfaces/interfaces";
import StatsBar from "./StatsBar";

const BaseStats = async ({ id }: IdProp) => {
  const pokemon = await PokemonSoloStats(id);

  return (
    <Container sx={styles.container}>
      {pokemon.pokemonData?.stats.map((thisStat: BaseStat) => (
        <StatsBar
          key={thisStat.stat.name}
          stat={thisStat.stat}
          base_stat={thisStat.base_stat}
        />
      ))}
    </Container>
  );
};

export default BaseStats;

const styles = {
  container: {
    width: "90%",
    height: "200px",
    backgroundColor: "#2F3437",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
