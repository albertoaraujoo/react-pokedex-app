import { Box, Typography } from "@mui/material";
import { capitalizeFirstLetter } from "../utils/textFormater";
import { PokemonData } from "@/Hooks/usePokeDataFechting";
import PokeballSvg from "./PokeballSvg";
import TipoComponent from "./tipoComponent";
import { typesFodas } from "./pokemonTypesIcons/tipos";
import { handleType } from "@/Hooks/useHandleTypes";

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
        <Box>
          <Box sx={styles.sprite} component="img" src={sprite} />
        </Box>
      </Box>

      <Box sx={styles.typesBox}>
        {/* <Typography sx={styles.typeName} variant="caption">
          {capitalizeFirstLetter(types.type1)}
        </Typography>

        {types.type2 ? (
          <Typography sx={styles.typeName} variant="caption">
            {capitalizeFirstLetter(types.type2)}
          </Typography>
        ) : null} */}
        {/* <TipoComponent>{findType({type.type01})}</TipoComponent>
        <TipoComponent>
          {typesFodas.{type.type01}}
        </TipoComponent> */}
        <TipoComponent>
          {handleType({ type: `${types.type1}`, list: typesFodas })}
        </TipoComponent>
        <TipoComponent>
          {handleType({ type: `${types.type2}`, list: typesFodas })}
        </TipoComponent>
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
