"use client";
import { PokeDataFetching } from "@/Hooks/useDataFetching";
import PokemonCard from "@/components/PokemonCard";
import PrevAndNextButtons from "@/components/PrevAndNextButtonsMainPage";
import { PokemonData } from "@/interfaces/interfaces";
import { Container, Grid } from "@mui/material";
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
      <PrevAndNextButtons firstFunction={prevPage} secondFunction={nextPage} />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing="auto"
        columnGap={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        rowGap={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        sx={styles.pokeListContainer}
      >
        {pokeList?.map((pokemon: PokemonData) => (
          <Grid item key={pokemon.name} xs="auto">
            <PokemonCard
              key={pokemon.name}
              url={pokemon.url}
              name={pokemon.name}
              order={pokemon.order}
              types={pokemon.types}
              sprite={pokemon.sprite}
              animatedSprite={pokemon.animatedSprite}
            />
          </Grid>
        ))}
      </Grid>
      <PrevAndNextButtons firstFunction={prevPage} secondFunction={nextPage} />
    </Container>
  );
};

export default PokemonList;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "20px",
    flexWrap: "wrap",
    marginTop: "50px",
  },
  pokeListContainer: {
    marginTop: "10px",
    marginBottom: "12px",
  },
};
