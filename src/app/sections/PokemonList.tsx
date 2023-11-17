"use client";
import { PokeDataFetching, PokemonData } from "@/Hooks/pokeDataFechting";
import { Container } from "@mui/material";
import PokemonCard from "../components/pokemonCard";
import { useState, useEffect } from "react";

const PokemonList = () => {
  const [offset, setOffset] = useState(0);
  const limit = 10;
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
          details={pokemon.details}
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
    marginTop: "80px",
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
    minWidth: "150px",
    height: "200px",
    backgroundColor: "#FAD4C0",
    border: "1px solid #000",
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
