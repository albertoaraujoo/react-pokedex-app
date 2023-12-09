import { Box, Typography, Container } from "@mui/material";
import { capitalizeFirstLetter } from "@/utils/textFormater";
import PokeballSvg from "@/components/PokeballSvg";
import TypesBox from "@/components/TypesBox";

const PokemonBigSoloCard = async (pokemon: any) => {
  return (
    <Container sx={styles.pokemon}>
      <Box sx={styles.pokemonSprite}>
        <PokeballSvg width="600" height="580" />
        <Box
          component="img"
          src={
            pokemon.pokemon.pokemonData.sprites.other["official-artwork"]
              .front_default
          }
        />
      </Box>
      <Typography sx={styles.number} variant="h5">
        #{pokemon.pokemon.pokemonData.id}
      </Typography>
      <Typography sx={styles.name} variant="h4">
        {capitalizeFirstLetter(pokemon.pokemon.pokemonData.name)}
      </Typography>
      <TypesBox
        iconHeight="35px"
        iconWidth="35px"
        width="150px"
        height="50px"
        type1={pokemon.pokemon.pokemonData.types[0]?.type?.name || null}
        type2={
          pokemon.pokemon.pokemonData.types.length > 1
            ? pokemon.pokemon.pokemonData.types[1].type.name
            : ""
        }
      />
    </Container>
  );
};

export default PokemonBigSoloCard;

const styles = {
  pokemon: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    gap: "35px",
  },
  pokemonSprite: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontWeight: 700,
    fontFamily: "var(--font-monteserrat)",
  },
  number: {
    fontSize: "30px",
    fontWeight: 900,
    color: "#707070",
  },
};
