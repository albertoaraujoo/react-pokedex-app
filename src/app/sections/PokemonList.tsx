"use client";
import { PokeDataFetching } from "@/app/Hooks/useDataFetching";
import Loading from "@/app/components/Loading";
import PokemonCard from "@/app/components/PokemonCard";
import PrevAndNextButtons from "@/app/components/PrevAndNextButtonsMainPage";
import { PokemonData } from "@/app/interfaces/interfaces";
import { useIsPokelistStore } from "@/app/stores/useIsPokelistStore";
import { useOffsetStore } from "@/app/stores/useOffsetStore";
import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";

const PokemonList = () => {
  const offset = useOffsetStore((state) => state.offset);
  const limit = useOffsetStore((state) => state.limit);
  const setOffset = useOffsetStore((state) => state.setOffset);
  const [pokeList, setPokeList] = useState<PokemonData[]>([]);
  const setIsPokelist = useIsPokelistStore((state) => state.setIsPokelist);

  useEffect(() => {
    const fetchData = async () => {
      const data = await PokeDataFetching(offset, limit);
      setPokeList(data);
    };

    fetchData();
  }, [offset, limit]);

  useEffect(() => {
    const handleIsPokelist = () => {
      if (pokeList.length > 0) {
        setIsPokelist(true);
      }
    };
    handleIsPokelist();
  }, [pokeList]);

  const nextPage = () => setOffset(offset + limit);
  const prevPage = () => setOffset(Math.max(0, offset - limit));

  return (
    <Container sx={styles.container}>
      {pokeList.length < 1 ? (
        <Loading />
      ) : (
        <>
          <PrevAndNextButtons
            firstFunction={prevPage}
            secondFunction={nextPage}
          />
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
          <PrevAndNextButtons
            firstFunction={prevPage}
            secondFunction={nextPage}
          />
        </>
      )}
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
    transition: "opacity 1.5s ease-in-out",
  },
  pokeListContainer: {
    marginTop: "10px",
    marginBottom: "12px",
  },
};
