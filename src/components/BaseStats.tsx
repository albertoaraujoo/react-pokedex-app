import { Container } from "@mui/material";
import React from "react";
import { BaseStat, WeaknessAndResistancesProps } from "@/interfaces/interfaces";
import StatsBar from "./StatsBar";
import SoloStatsTitle from "./SoloStatsTitle";

const BaseStats = async ({ pokemon, color }: WeaknessAndResistancesProps) => {
  return (
    <Container sx={styles.container(color)}>
      <SoloStatsTitle text="Base Stats" />
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
  container: (color: WeaknessAndResistancesProps) => ({
    width: "90%",
    height: "220px",
    backgroundColor: "#2F3437",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTop: `5px solid ${color}`,
  }),
};
