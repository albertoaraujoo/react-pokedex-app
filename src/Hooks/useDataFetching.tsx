import { PokemonData } from "@/interfaces/interfaces";

export const PokeDataFetching = async (
  offset: number = 0,
  limit: number = 20
): Promise<PokemonData[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.results) {
      return [];
    }

    const fullData = await Promise.all(
      data.results.map(async (pokemon: PokemonData) => {
        const res = await fetch(pokemon.url);
        const fullPokemonData = await res.json();

        return {
          name: fullPokemonData.name,
          order: fullPokemonData.id,
          types: {
            type1: fullPokemonData.types[0]?.type?.name || null,
            type2:
              fullPokemonData.types.length > 1
                ? fullPokemonData.types[1].type.name
                : "",
          },
          sprite:
            fullPokemonData.sprites.other["official-artwork"].front_default,
          animatedSprite: fullPokemonData.sprites.versions["generation-v"][
            "black-white"
          ].animated.front_default
            ? fullPokemonData.sprites.versions["generation-v"]["black-white"]
                .animated.front_default
            : null,
        };
      })
    );
    return fullData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const PokemonSoloStats = async (id: string) => {
  const resPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonData = await resPokemon.json();

  const resSpecies = await fetch(pokemonData.species.url);
  const speciesData = await resSpecies.json();

  const resEvolution = await fetch(speciesData.evolution_chain.url);
  const evolutionData = await resEvolution.json();

  return {
    pokemonData: pokemonData,
    speciesData: speciesData,
    evolutionData: [
      {
        fetch: await fetch(
          `https://pokeapi.co/api/v2/pokemon/${evolutionData.chain.species.name}`
        )
          .then((res) => res.json())
          .then((data) => {
            return {
              name: data.name,
              order: data.id,
              url: data.species.url,
              sprite: data.sprites.other["official-artwork"].front_default,
              animatedSprite: data.sprites.versions["generation-v"][
                "black-white"
              ].animated.front_default
                ? data.sprites.versions["generation-v"]["black-white"].animated
                    .front_default
                : null,
              types: {
                type1: data.types[0]?.type?.name || null,
                type2: data.types.length > 1 ? data.types[1].type.name : "",
              },
            };
          })
          .catch((err) => {
            console.log("error:" + err);
          }),
      },
      {
        fetch: evolutionData?.chain.evolves_to[0]?.species.name
          ? await fetch(
              `https://pokeapi.co/api/v2/pokemon/${evolutionData?.chain.evolves_to[0]?.species.name}`
            )
              .then((res) => res.json())
              .then((data) => {
                return {
                  name: data.name,
                  order: data.id,
                  url: data.species.url,
                  sprite: data.sprites.other["official-artwork"].front_default,
                  animatedSprite: data.sprites.versions["generation-v"][
                    "black-white"
                  ].animated.front_default
                    ? data.sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    : null,
                  types: {
                    type1: data.types[0]?.type?.name || null,
                    type2: data.types.length > 1 ? data.types[1].type.name : "",
                  },
                };
              })
              .catch((err) => {
                console.log("an error has occurred:" + err);
              })
          : null,
      },

      {
        fetch: evolutionData?.chain.evolves_to[0]?.evolves_to[0]?.species.name
          ? await fetch(
              `https://pokeapi.co/api/v2/pokemon/${evolutionData?.chain.evolves_to[0]?.evolves_to[0]?.species.name}`
            )
              .then((res) => res.json())
              .then((data) => {
                return {
                  name: data.name,
                  order: data.id,
                  url: data.species.url,
                  sprite: data.sprites.other["official-artwork"].front_default,
                  animatedSprite: data.sprites.versions["generation-v"][
                    "black-white"
                  ].animated.front_default
                    ? data.sprites.versions["generation-v"]["black-white"]
                        .animated.front_default
                    : null,
                  types: {
                    type1: data.types[0]?.type?.name || null,
                    type2: data.types.length > 1 ? data.types[1].type.name : "",
                  },
                };
              })
          : null,
      },
    ],
  };
};
