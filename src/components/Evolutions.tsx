"use client";
import { useState, useEffect } from "react";
import { PokemonSoloStats } from "@/Hooks/useDataFetching";
import { IdProp, PokemonData } from "@/interfaces/interfaces";
import { Box, Container, Typography } from "@mui/material";
import PokemonCard from "./PokemonCard";
import SoloStatsTitle from "./SoloStatsTitle";

const Evolutions = ({ id }: IdProp) => {
  const [evolutionData, setEvolutionData] = useState<PokemonData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const pokemon = await PokemonSoloStats(id);
      console.log(pokemon);
      const resolvedEvolutionData = (
        await Promise.all(
          pokemon.evolutionData.map(async (evolution) => {
            const data = await evolution.fetch;
            if (data) {
              return {
                name: data.name,
                url: data.url,
                order: data.order,
                types: data.types,
                sprite: data.sprite,
                animatedSprite: data.animatedSprite,
              };
            }
            return null;
          })
        )
      ).filter((item) => item !== null);
      setEvolutionData(resolvedEvolutionData as PokemonData[]);
    };

    fetchData();
  }, [id]);

  return (
    <Container sx={styles.container}>
      <SoloStatsTitle text="Evolutions" />
      <Box sx={styles.cards}>
        {evolutionData.map((evolution, index) => {
          return (
            <PokemonCard
              animatedSprite={evolution.animatedSprite}
              name={evolution.name}
              order={evolution.order}
              sprite={evolution.sprite}
              key={index}
              types={evolution.types}
              url={evolution.name}
            />
          );
        })}
      </Box>
    </Container>
  );
};

export default Evolutions;

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "5px",
    width: "90%",
    height: "210px",
    backgroundColor: "#2F3437",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    transform: "scale(0.8)",
  },

  alert: {
    fontSize: "10px",
  },
};
