"use client";
import { PokeDataFetching } from "@/Hooks/useDataFetching";
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
};
