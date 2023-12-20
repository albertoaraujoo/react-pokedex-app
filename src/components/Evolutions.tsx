import { Box, Container } from "@mui/material";
import PokemonCard from "@/components/PokemonCard";
import SoloStatsTitle from "./SoloStatsTitle";
import { useHandleEvolutionsCards } from "@/Hooks/useHandleEvolutionsCards";
import {
  PokemonData,
  WeaknessAndResistancesProps,
} from "@/interfaces/interfaces";

const Evolutions = async ({ pokemon, color }: WeaknessAndResistancesProps) => {
  const evolutionsData = await useHandleEvolutionsCards(pokemon);

  return !evolutionsData || evolutionsData.length === 0 ? (
    <Box sx={{ display: "none" }}></Box>
  ) : (
    <Container sx={styles.container(color)}>
      <SoloStatsTitle text="Evolutions" />
      <Box sx={styles.cards}>
        {evolutionsData.map((evolution: PokemonData, index: any) => (
          <PokemonCard
            animatedSprite={evolution.animatedSprite}
            name={evolution.name}
            order={evolution.order}
            sprite={evolution.sprite}
            key={index}
            types={evolution.types}
            url={evolution.name}
          />
        ))}
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
    width: { xs: "100%", md: "90%" },
    height: { xs: "fit-content", md: "213px" },
    backgroundColor: "#2F3437",
    borderTop: `5px solid ${color}`,
  }),
  cards: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    transform: { xs: "scale(0.9)", md: "scale(0.7)" },
  },

  alert: {
    fontSize: "10px",
  },
};
