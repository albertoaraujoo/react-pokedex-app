export type PokemonTypes = {
  type1: string;
  type2?: string;
};

export type PokemonData = {
  name: string;
  url: string;
  order: number;
  types: PokemonTypes;
  sprite: string;
};
