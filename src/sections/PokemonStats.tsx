import { Box, Container } from "@mui/material";
import { IdProp } from "@/interfaces/interfaces";
import { PokemonSoloStats } from "@/Hooks/useDataFetching";
import WeaknessAndResistances from "@/components/WeaknessAndResistances";
import Evolutions from "@/components/Evolutions";
import BaseStats from "@/components/BaseStats";
import { handleColor } from "@/Hooks/useGetColorAndType";
import { allPokemonTypes } from "@/components/AllPokemonTypes";
import Shiny from "@/components/Shiny";
import PokemonBigSoloCard from "@/components/pokemonBigSoloCard";
import PrevAndNextButtonsSoloPage from "@/components/PrevAndNextButtonsSoloPage";
import ButtonHome from "@/components/ButtonHome";

const PokemonStats = async ({ id }: IdProp) => {
  const pokemon = await PokemonSoloStats(id);

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
        <Box sx={styles.infos}>
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
    marginBottom: "20px",
  },
  infos: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    flexDirection: "column",
    width: { xs: "110%", md: "90%" },
    height: "80%",
  },
};
