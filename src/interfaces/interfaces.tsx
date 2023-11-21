export type PokemonTypes = {
  type1: string;
  type2?: string;
};

export type TypeObject = {
  name: string;
  svg: React.ReactNode;
  color: string;
};

export type HandleTypesProps = {
  type: string;
  list: TypeObject[];
};

export type TypeComponentProps = {
  children: React.ReactNode;
  bgColor?: any;
};

export type PokemonData = {
  name: string;
  url: string;
  order: number;
  types: PokemonTypes;
  sprite: string;
  animatedSprite: string;
};
