import { SelectData } from "@/interfaces/interfaces";

export const filterData = (selectData: any, inputValue: any) => {
  return selectData
    .filter((pokemon: SelectData) =>
      pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
    )
    .sort((a: any, b: any) => {
      const indexA = a.name.toLowerCase().indexOf(inputValue.toLowerCase());
      const indexB = b.name.toLowerCase().indexOf(inputValue.toLowerCase());
      return indexA - indexB;
    });
};
