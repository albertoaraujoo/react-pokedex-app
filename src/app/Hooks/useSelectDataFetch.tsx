import { SelectData } from "@/app/interfaces/interfaces";

export const SelectDataFetch = async (
  offset: number = 0,
  limit: number = 2000
): Promise<SelectData[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data.results) {
      return [];
    }

    const selectData = await Promise.all(
      data.results.map(async (pokemon: SelectData) => {
        const res = await fetch(pokemon.url);
        const fullSelectData = await res.json();

        return {
          name: fullSelectData.name,
          order: fullSelectData.id,
        };
      })
    );

    return selectData;
  } catch (error) {
    console.error(error);
    return [];
  }
};
