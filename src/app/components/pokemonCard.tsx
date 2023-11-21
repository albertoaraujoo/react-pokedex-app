import { Box, Typography } from "@mui/material";
import PokeballSvg from "./PokeballSvg";
import TypesBox from "./typesBox";
import { PokemonData, PokemonTypes } from "../interfaces/interfaces";
import { capitalizeFirstLetter } from "../utils/textFormater";

const PokemonCard = (
  { name, order, sprite }: PokemonData,
  { type1, type2 }: PokemonTypes
) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.nameAndNumber}>
        <Typography sx={styles.name} variant="h6">
          {capitalizeFirstLetter(name)}
        </Typography>
        <Typography sx={styles.number} variant="caption">
          #{order}
        </Typography>
      </Box>
      <Box sx={styles.cardSprite}>
        <PokeballSvg />
        <Box>
          <Box sx={styles.sprite} component="img" src={sprite} />
        </Box>
      </Box>
      <TypesBox type1={type1} type2={type2} />
    </Box>
  );
};

export default PokemonCard;

const styles = {
  nameAndNumber: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#2F3437",
    width: "90%",
    alignSelf: "center",
    color: "#FFFFFF",
    borderBottom: "#5E686E solid 1px",
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
    backgroundColor: "#2F3437",
    border: "1px solid #000",
    boxShadow: "0px 2px 8px 0px #00000022",
  },
  cardSprite: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },

  sprite: {
    width: "120px",
    height: "120px",
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
