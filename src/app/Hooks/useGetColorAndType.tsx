import { HandleTypesProps } from "@/app/interfaces/interfaces";

export const handleType = ({ type, list }: HandleTypesProps) => {
  const typeObject = list.find((item: any) => item.name === type);

  if (typeObject) {
    return typeObject.svg;
  }

  return null;
};

export const handleColor = ({ type, list }: HandleTypesProps) => {
  const typeObject = list.find((item: any) => item.name === type);

  if (typeObject) {
    return typeObject.color;
  }

  return null;
};
