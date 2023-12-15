"use client";
import { Box, Typography } from "@mui/material";
import { capitalizeFirstLetter } from "../utils/textFormater";
import PokeballSvg from "./PokeballSvgBackground";

import { PokemonData } from "@/interfaces/interfaces";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TypesBox from "./TypesBox";

const PokemonCard = ({
  name,
  order,
  sprite,
  types,
  animatedSprite,
}: PokemonData) => {
  const router = useRouter();

  const [image, setImage] = useState(sprite);

  const [onMove, setOnMove] = useState(false);

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
        <PokeballSvg width="150" height="150" />
        <Box>
          <Box
            sx={styles.sprite(onMove)}
            component="img"
            src={image}
            onMouseOver={() => {
              setImage(animatedSprite ? animatedSprite : sprite);
              setOnMove(true);
            }}
            onMouseLeave={() => {
              setImage(sprite);
              setOnMove(false);
            }}
            onClick={() => {
              router.push(`/pokemon/${order}`);
            }}
          />
        </Box>
      </Box>
      <TypesBox
        iconHeight="17px"
        iconWidth="17px"
        width="35%"
        height=""
        type1={types?.type1}
        type2={types?.type2}
      />
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
    fontSize: "14px",
    fontWeight: "700",
    fontFamily: "var(--font-monteserrat)",
  },
  number: {
    fontSize: "14px",
    fontWeight: "900",
    color: "#707070",
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
    transition: "transform 0.5s ease-in-out",
  },

  sprite: (onMove: boolean) => ({
    width: onMove ? "90px" : "120px",
    height: onMove ? "90px" : "120px",
  }),

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
