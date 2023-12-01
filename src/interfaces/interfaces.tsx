export type PokemonTypes = {
  type1: string;
  type2?: string;
  width: string;
  height: string;
  iconWidth: string;
  iconHeight: string;
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
  width: string;
  height: string;
};

export type PokemonData = {
  name: string;
  url: string;
  order: number;
  types: PokemonTypes;
  sprite: string;
  animatedSprite: string;
};

export type IdProp = {
  id: string;
};

export type pokeballDimensions = {
  width: string;
  height: string;
};

export type PokemonTypeBox = {
  children: React.ReactNode;
  iconWidth: string;
  iconHeight: string;
};
