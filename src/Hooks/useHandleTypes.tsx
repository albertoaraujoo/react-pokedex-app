import { HandleTypesProps } from "@/app/interfaces/interfaces";

export const handleType = ({ type, list }: HandleTypesProps) => {
  const typeObject = list.find((item) => item.name === type);

  if (typeObject) {
    return typeObject.svg;
  }

  return null;
};
