import { HandleWeakness } from "./useHandleWeakness";

import { HandleResistances } from "./useHandleResistances";

export const handleResitancesAndWeaknesses = async (
  type1: string,
  type2: string
) => {
  const fetchTypes = await fetch("https://pokeapi.co/api/v2/type");
  const typesList = await fetchTypes.json();

  const fetchTypesFunction = async (list: any) => {
    const typeDatas = [];

    const handleType1 = list.find((item: any) => item.name === type1);
    if (handleType1) {
      const fetchType1 = await fetch(handleType1.url);
      const type1Data = await fetchType1.json();
      typeDatas.push(type1Data);
    }

    const handleType2 = list.find((item: any) => item.name === type2);
    if (handleType2) {
      const fetchType2 = await fetch(handleType2.url);
      const type2Data = await fetchType2.json();
      typeDatas.push(type2Data);
    }

    const settingTheSets = (array: any) => {
      return {
        weakness: [
          ...HandleWeakness(array, 0, typeDatas.length > 1 ? 1 : undefined),
        ],
        resistances: [
          ...HandleResistances(array, 0, typeDatas.length > 1 ? 1 : undefined),
        ],
      };
    };

    return settingTheSets(typeDatas);
  };

  return fetchTypesFunction(typesList.results);
};
