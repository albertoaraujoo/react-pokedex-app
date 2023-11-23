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

export const PokemonSoloStats = async (id: string) => {
  const resPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonData = await resPokemon.json();

  const resSpecies = await fetch(pokemonData.species.url);
  const speciesData = await resSpecies.json();

  const resEvolution = await fetch(speciesData.evolution_chain.url);
  const evolutionData = await resEvolution.json();

  const noEvolutionYet = evolutionData.chain.species.name;
  const firstEvolution = evolutionData?.chain.evolves_to[0]?.species.name;
  const secondEvolution =
    evolutionData?.chain.evolves_to[0]?.evolves_to[0]?.species.name;

  return {
    pokemonData: pokemonData,
    speciesData: speciesData,
    evolutionData: {
      noEvolutionYet: noEvolutionYet,
      firstEvolution: firstEvolution,
      secondEvolution: secondEvolution,
    },
  };
};
