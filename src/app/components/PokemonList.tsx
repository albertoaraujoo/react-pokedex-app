import PokeDataFetching from "@/Hooks/pokeDataFechting";
import { Image, Box, Container, Typography } from "@mui/material";

const PokemonList = async () => {
  const { pokeDataArray } = await PokeDataFetching();

  return (
    <Container sx={styles.container}>
      {pokeDataArray?.map((pokemon) => (
        <Box key={pokemon.name} sx={styles.card}>
          <Typography variant="h6">{pokemon.name}</Typography>
          <Box component="img" src={pokemon.sprite} />
          <p>{pokemon.order}</p>
          <p>{pokemon.types.type1}</p>
          <p>{pokemon.types.type2}</p>
        </Box>
      ))}
    </Container>
  );
};

export default PokemonList;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    width: "90%",
    overflow: "auto",
    flexWrap: "wrap",
    marginTop: "50px",
    border: "red 3px solid",
    maxHeight: "50%",
  },
  card: {
    width: "150px",
    height: "200px",
    background:
      "linear-gradient(0deg, rgba(250,245,245,1) 15%, rgba(168,168,168,1) 100%)",
    border: "1px solid #FFF",
    borderRadius: "10px",
    marginTop: "10px",
  },
};
