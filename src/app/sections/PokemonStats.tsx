import { Box, Container } from "@mui/material";
import { IdProp } from "@/app/interfaces/interfaces";
import { PokemonSoloStats } from "@/app/Hooks/useDataFetching";
import WeaknessAndResistances from "@/app/components/WeaknessAndResistances";
import Evolutions from "@/app/components/Evolutions";
import BaseStats from "@/app/components/BaseStats";
import { handleColor } from "@/app/Hooks/useGetColorAndType";
import { allPokemonTypes } from "@/app/utils/AllPokemonTypes";
import Shiny from "@/app/components/Shiny";
import { useHandleEvolutionsCards } from "@/app/Hooks/useHandleEvolutionsCards";
import PrevAndNextButtonsSoloPage from "@/app/components/PrevAndNextButtonsSoloPage";
import ButtonHome from "@/app/components/ButtonHome";
import PokemonBigSoloCard from "@/app/components/PokemonBigSoloCard";

const PokemonStats = async ({ id }: IdProp) => {
  const pokemon = await PokemonSoloStats(id);
  const evolutionsData = await useHandleEvolutionsCards(pokemon);

  const isEevee = evolutionsData[0].name === "vaporeon" ? true : false;

  const color = handleColor({
    type: pokemon?.pokemonData.types[0].type.name,
    list: allPokemonTypes,
  });

  return (
    <Container sx={styles.container}>
      <Box sx={{ position: "absolute", left: 0, top: 60 }}>
        <ButtonHome color={color ? color : "#FFFFFF"} />
      </Box>
      <PrevAndNextButtonsSoloPage id={id} />
      <Box sx={styles.contentBox}>
        <PokemonBigSoloCard pokemon={pokemon} />
        <Box sx={styles.infos(isEevee)}>
          <WeaknessAndResistances pokemon={pokemon} color={color} />
          <Evolutions pokemon={pokemon} color={color} />
          <BaseStats pokemon={pokemon} color={color} />
          <Shiny pokemon={pokemon} color={color} />
        </Box>
      </Box>
    </Container>
  );
};

export default PokemonStats;

const styles = {
  container: {
    marginTop: { xs: "70px", md: "70px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: { xs: "fit-content", sm: "fit-content", md: "100dvh" },
    color: "#FFFFFF",
    width: "90%",
    marginBottom: "20px",
  },
  contentBox: {
    marginTop: { xs: "80px", sm: "60px", md: "30px", lg: "-20px", xl: "-40px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: { xs: "column", lg: "row" },
    minHeight: { xs: "fit-content", sm: "fit-content", md: "100dvh" },
    color: "#FFFFFF",
    width: "90%",
    gap: { xs: "25px", lg: 0 },
    marginBottom: "10px",
    maxWidth: "700px",
  },
  infos: (isEevee: boolean) => ({
    display: "flex",
    marginTop: isEevee ? { lg: "70px" } : "0",
    alignItems: "center",
    justifyContent: "center",
    gap: { xs: "20px", sm: "10px" },
    flexDirection: "column",
    width: { xs: "110%", md: "90%" },
    height: "80%",
    marginBottom: { xs: "25px", lg: "10px" },
  }),
};
