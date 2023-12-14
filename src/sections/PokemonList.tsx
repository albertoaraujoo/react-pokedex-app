"use client";
import { PokeDataFetching } from "@/Hooks/useDataFetching";
import Arrow from "@/components/Arrow";
import PokemonCard from "@/components/PokemonCard";
import PrevAndNextButtons from "@/components/PrevAndNextButtonsMainPage";
import { PokemonData } from "@/interfaces/interfaces";
import { Box, Container } from "@mui/material";
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
      <PrevAndNextButtons function1={prevPage} function2={nextPage} />
      <Box sx={styles.pokeListContainer}>
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
      </Box>
      <PrevAndNextButtons function1={prevPage} function2={nextPage} />
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
    width: "100%",
    padding: "25px",
    flexWrap: "wrap",
    height: "100%",
    marginTop: "50px",
  },
  pokeListContainer: {
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
    alignItems: "center",
    gap: { xs: "10px", sm: "35px", lg: "25px" },
    width: "100%",
    padding: "25px",
    flexWrap: "wrap",
    height: "100%",
  },
};
