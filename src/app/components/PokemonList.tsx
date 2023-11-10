import PokeDataFetching from "@/Hooks/pokeDataFechting";
import { Box, Container, Typography } from "@mui/material";
import { capitalizeFirstLetter } from "../utils/textFormater";

const PokemonList = async () => {
  const { pokeDataArray } = await PokeDataFetching();

  return (
    <Container sx={styles.container}>
      {pokeDataArray?.map((pokemon) => (
        <Box key={pokemon.name} sx={styles.card}>
          <Box sx={styles.nameAndNumber}>
            <Typography sx={styles.name} variant="h6">
              {capitalizeFirstLetter(pokemon.name)}
            </Typography>
            <Typography sx={styles.number} variant="p">
              #{pokemon.order}
            </Typography>
          </Box>
          <Box sx={styles.cardSprite}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-pokeball"
              width="150"
              height="150"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="#74BEB5"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ opacity: 0.06, position: "absolute", zIndex: -1 }}
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
              <circle cx="9" cy="9" r="9" transform="translate(3 3)" />{" "}
              <circle cx="12" cy="12" r="3" /> <path d="M3 12h6m6 0h6" />{" "}
            </svg>
            <Box component="img" src={pokemon.sprite} />
          </Box>

          <Box sx={styles.typesBox}>
            <Typography sx={styles.typeName} variant="p">
              {pokemon.types.type1}
            </Typography>
            {pokemon.types.type2 ? (
              <Typography sx={styles.typeName} variant="p">
                {pokemon.types.type2}
              </Typography>
            ) : null}
          </Box>
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
    marginTop: "60px",
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
    marginTop: "10px",
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
    backgroundColor: "rgba(255, 255, 255, 1.5)",
    borderRadius: "10px",
    padding: "2px 5px 2px 5px",
    border: "1px solid #000",
    fontSize: "12px",
  },
};
