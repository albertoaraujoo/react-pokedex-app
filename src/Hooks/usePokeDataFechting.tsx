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
          animatedSprite:
            fullPokemonData.sprites.versions["generation-v"]["black-white"]
              .animated.front_default,
        };
      })
    );
    return fullData;
  } catch (error) {
    console.error(error);
    return [];
  }
};
