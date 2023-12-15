import { Box, Typography, Container } from "@mui/material";
import { capitalizeFirstLetter } from "@/utils/textFormater";
import PokeballSvg from "@/components/PokeballSvgBackground";
import TypesBox from "@/components/TypesBox";

const PokemonBigSoloCard = async (pokemon: any) => {
  return (
    <Container sx={styles.pokemon}>
      <Box sx={styles.pokemonSpriteBox}>
        <PokeballSvg width="100%" height="580" />
        <Box
          sx={styles.pokemonSprite}
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
        {pokemon.pokemon.pokemonData.name === "deoxys normal"
          ? capitalizeFirstLetter("Deoxys")
          : capitalizeFirstLetter(pokemon.pokemon.pokemonData.name)}
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    gap: { xs: "10px", md: "35px" },
  },
  pokemonSpriteBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pokemonSprite: {
    width: { xs: "100%", md: "475px" },
  },
  name: {
    fontWeight: 700,
    fontFamily: "var(--font-monteserrat)",
    fontSize: { xs: "25px", sm: "28px", md: "30px", lg: "34px" },
  },
  number: {
    marginTop: "25px",
    fontSize: "30px",
    fontWeight: 900,
    color: "#707070",
  },
};
