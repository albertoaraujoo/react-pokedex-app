export type PokemonTypes = {
  type1: string;
  type2: string;
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
  title: string;
};

export type PokemonData = {
  fetch?: Promise<PokemonData>;
  name: string;
  url: string;
  order: number;
  types: PokemonTypes;
  sprite: string;
  animatedSprite: string;
};

export type StatsTitle = {
  text: string;
};

export type IdProp = {
  id: string;
};

export type pokeballDimensions = {
  width: string;
  height: string;
};

export type ArrowProps = {
  width: string;
  height: string;
  direction: boolean;
  color: string;
  onClick: () => void;
};

export type PrevAndNextButtonMainPage = {
  firstFunction: () => void;
  secondFunction: () => void;
};

export type PokemonTypeBox = {
  children: React.ReactNode;
  iconWidth: string;
  iconHeight: string;
};

export type StatsBarProps = {
  stat: string;
  value: number;
};

export type Stat = {
  name: string;
};

export type BaseStat = {
  stat: Stat;
  base_stat: number;
};

export type WeaknessAndResistancesProps = {
  pokemon: any;
  color: any;
};
