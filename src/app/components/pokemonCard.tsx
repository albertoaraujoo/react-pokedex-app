import { Box, Typography } from "@mui/material";
import { capitalizeFirstLetter } from "../utils/textFormater";
import { PokemonData } from "@/Hooks/pokeDataFechting";
import PokeballSvg from "./PokeballSvg";

const PokemonCard = ({ name, order, types, sprite }: PokemonData) => {
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
        <Box component="img" src={sprite} />
      </Box>
      <Box sx={styles.typesBox}>
        <Typography sx={styles.typeName} variant="caption">
          {capitalizeFirstLetter(types.type1)}
        </Typography>
        {types.type2 ? (
          <Typography sx={styles.typeName} variant="caption">
            {capitalizeFirstLetter(types.type2)}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
};

export default PokemonCard;

const styles = {
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
