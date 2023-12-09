import { Box, Container } from "@mui/material";
import PokemonCard from "./PokemonCard";
import SoloStatsTitle from "./SoloStatsTitle";
import { useHandleEvolutionsCards } from "@/Hooks/useHandleEvolutionsCards";
import {
  PokemonData,
  WeaknessAndResistancesProps,
} from "@/interfaces/interfaces";

const Evolutions = async ({ pokemon, color }: WeaknessAndResistancesProps) => {
  const evolutionsData = await useHandleEvolutionsCards(pokemon);

  return (
    <Container sx={styles.container(color)}>
      <SoloStatsTitle text="Evolutions" />
      <Box sx={styles.cards}>
        {evolutionsData.map((evolution: PokemonData, index: any) => {
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
  container: (color: WeaknessAndResistancesProps) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "5px",
    width: "90%",
    height: "213px",
    backgroundColor: "#2F3437",
    borderTop: `5px solid ${color}`,
  }),
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    transform: "scale(0.7)",
  },

  alert: {
    fontSize: "10px",
  },
};
