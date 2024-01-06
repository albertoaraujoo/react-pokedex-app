import { Box, Container } from "@mui/material";
import PokemonCard from "@/app/components/PokemonCard";
import SoloStatsTitle from "@/app/components/SoloStatsTitle";
import { useHandleEvolutionsCards } from "@/app/Hooks/useHandleEvolutionsCards";
import {
  PokemonData,
  WeaknessAndResistancesProps,
} from "@/app/interfaces/interfaces";

const Evolutions = async ({ pokemon, color }: WeaknessAndResistancesProps) => {
  const evolutionsData = await useHandleEvolutionsCards(pokemon);

  const isEevee = evolutionsData[0].name === "vaporeon" ? true : false;

  return !evolutionsData || evolutionsData.length === 0 ? (
    <Box sx={{ display: "none" }}></Box>
  ) : (
    <Container sx={styles.container(color, isEevee)}>
      <SoloStatsTitle text="Evolutions" />
      <Box sx={styles.cards(isEevee)}>
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
  container: (color: WeaknessAndResistancesProps, isEevee: boolean) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "15px",
    width: { xs: "100%", md: "90%" },
    height: "auto",
    backgroundColor: "#2F3437",
    borderTop: `5px solid ${color}`,
  }),
  cards: (isEevee: boolean) => ({
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    gap: "20px",
    width: isEevee ? { lg: "800px" } : "auto",
    minWidth: { xs: "auto", lg: "700px" },
    transform: { xs: "scale(0.9)", md: "scale(0.7)" },
    overflow: isEevee ? { md: "auto" } : "none",
    flexWrap: isEevee ? { md: "wrap" } : "none",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#888",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#555",
    },
  }),

  alert: {
    fontSize: "10px",
  },
};
