import { Box, Typography } from "@mui/material";
import { PokemonSoloStats } from "@/Hooks/useDataFetching";
import { capitalizeFirstLetter } from "@/utils/textFormater";
import PokeballSvg from "@/components/PokeballSvg";
import TypesBox from "@/components/typesBox";
import { IdProp } from "@/interfaces/interfaces";

const PokemonBigSoloCard = async ({ id }: IdProp) => {
  const pokemon = await PokemonSoloStats(id);

  return (
    <Box sx={styles.pokemon}>
      <PokeballSvg width="650" height="650" />
      <Box
        component="img"
        src={
          pokemon.pokemonData.sprites.other["official-artwork"].front_default
        }
      />
      <Typography sx={styles.number} variant="h5">
        #{pokemon.pokemonData.id}
      </Typography>
      <Typography sx={styles.name} variant="h4">
        {capitalizeFirstLetter(pokemon.pokemonData.name)}
      </Typography>
      <TypesBox
        iconHeight="35px"
        iconWidth="35px"
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
    height: "100%",
    gap: "15px",
  },
  name: {
    fontWeight: 700,
    fontFamily: "var(--font-monteserrat)",
  },
  number: {
    fontSize: "30px", // '1.5rem
    fontWeight: 900,
    color: "#707070",
  },
};
