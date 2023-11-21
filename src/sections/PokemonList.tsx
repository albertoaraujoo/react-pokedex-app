"use client";
import { PokeDataFetching } from "@/Hooks/usePokeDataFechting";
import PokemonCard from "@/components/pokemonCard";
import { PokemonData } from "@/interfaces/interfaces";

import { Container } from "@mui/material";

import { useState, useEffect } from "react";

const PokemonList = () => {
  const [offset, setOffset] = useState(0);
  const limit = 20;
  const [pokeList, setPokeList] = useState<PokemonData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await PokeDataFetching(offset, limit);
      setPokeList(data);
    };

    fetchData();
  }, [offset, limit]);

  const nextPage = () => setOffset(offset + limit);
  const prevPage = () => setOffset(Math.max(0, offset - limit));

  return (
    <Container sx={styles.container}>
      {pokeList?.map((pokemon: PokemonData) => (
        <PokemonCard
          key={pokemon.name}
          url={pokemon.url}
          name={pokemon.name}
          order={pokemon.order}
          types={pokemon.types}
          sprite={pokemon.sprite}
          animatedSprite={pokemon.animatedSprite}
        />
      ))}

      <button onClick={nextPage}>next</button>
      <button onClick={prevPage}>prev</button>
    </Container>
  );
};

export default PokemonList;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
    alignItems: "center",
    gap: "30px",
    width: "90%",
    overflow: "auto",
    flexWrap: "wrap",
    minHeight: "100dvh",
    marginTop: "80px",
    marginBottom: "80px",
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
    minWidth: "150px",
    height: "200px",
    backgroundColor: "#FAD4C0",
    border: "1px solid #000",
    boxShadow: "0px 2px 8px 0px #00000022",
  },
};
