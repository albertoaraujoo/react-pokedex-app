export type pokemonTypeProps = {
  width: number;
  height: number;
  fill: string;
};

export type TypeObject = {
  name: string;
  svg: SVGRectElement;
};

export type HandleTypesProps = {
  type: string;
  list: TypeObject[];
};
