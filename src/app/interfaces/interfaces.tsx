import { ReactNode } from "react";

export type pokemonTypeProps = {
  width: number;
  height: number;
  fill: string;
};

export type TypeObject = {
  name: string;
  svg: ReactElement;
};

export type HandleTypesProps = {
  type: string;
  list: TypeObject[];
};
