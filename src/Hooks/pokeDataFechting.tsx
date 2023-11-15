export type PokemonData = {
  name: string;
  order: number;
  types: {
    type1: string;
    type2: string;
  };
  sprite: string;
};

export default async function PokeDataFetching() {
  const pokeDataArray: PokemonData[] = [];

  for (let i = 1; i < 152; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    const data = await res.json();

    pokeDataArray.push({
      name: data.name,
      order: data.order,
      types: {
        type1: data.types[0]?.type?.name || null,
        type2: data.types.length > 1 ? data.types[1].type.name : "",
      },
      sprite: data.sprites.versions["generation-vi"]["x-y"].front_default,
    });
  }

  return { pokeDataArray };
}
