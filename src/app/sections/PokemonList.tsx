import PokeDataFetching from "@/Hooks/pokeDataFechting";
import { Container } from "@mui/material";
import PokemonCard from "../components/pokemonCard";

const PokemonList = async () => {
  const { pokeDataArray } = await PokeDataFetching();

  return (
    <Container sx={styles.container}>
      {pokeDataArray?.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          order={pokemon.order}
          types={pokemon.types}
          sprite={pokemon.sprite}
        />
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
    marginTop: "80px",
    maxHeight: "50%",
    marginBottom: "20px",
  },
  nameAndNumber: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#74BEB5",
    width: "100%",
    alignSelf: "center",
    color: "#FFFFFF",
  },
  name: {
    fontSize: "15px",
    fontWeight: "700",
  },
  number: {
    fontSize: "15px",

    fontFamily: "'Lexend', sans-serif",
    fontWeight: "900",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "space-between",
    width: "150px",
    height: "200px",
    backgroundColor: "#FAD4C0",
    border: "1px solid #000",
    // marginTop: "10px",
    boxShadow: "0px 2px 8px 0px #00000022",
  },
  cardSprite: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  typesBox: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "5px",
    gap: "6px",
  },
  typeName: {
    boxShadow: "0px 2px 8px 0px #00000022",
    backgroundColor: "#74BEB5",
    borderRadius: "8px",
    padding: "2px 7px 2px 7px",
    fontSize: "12px",
    fontWeight: 700,
    color: "#FFFFFF",
  },
};
