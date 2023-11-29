// "use client";
import { Box, Container, Typography } from "@mui/material";
import { PokemonSoloStats } from "@/Hooks/useDataFetching";
import { IdProp } from "@/interfaces/interfaces";
import PokeballSvg from "@/components/PokeballSvg";
import TypesBox from "@/components/typesBox";

const PokemonStats = async ({ id }: IdProp) => {
  const pokemon = await PokemonSoloStats(id);

  console.log(pokemon);

  return (
    <Container sx={styles.container}>
      <Box sx={styles.pokemon}>
        <PokeballSvg width="650" height="650" />
        <Box
          component="img"
          src={
            pokemon.pokemonData.sprites.other["official-artwork"].front_default
          }
        />
        <Typography variant="h5">#{pokemon.pokemonData.id}</Typography>
        <Typography variant="h4">
          {pokemon.pokemonData.name.toUpperCase()}
        </Typography>
        <TypesBox
          width="150px"
          height="50px"
          type1={pokemon.pokemonData.types[0]?.type?.name || null}
          type2={
            pokemon.pokemonData.types.length > 1
              ? pokemon.pokemonData.types[1].type.name
              : ""
          }
        />
      </Box>
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    gap: "10px",
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
