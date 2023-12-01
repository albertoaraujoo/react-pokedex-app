export const handleEffectivenessAndWeaknesses = async (
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
      const weakness = new Set();

      const handleWeaknesses = (
        array: any,
        index1: number | string,
        index2?: number | string
      ) => {
        if (index2) {
          const doubleDamageType1 = new Set(
            array[index1].damage_relations.double_damage_from.map(
              (item: any) => item.name
            )
          );

          const doubleDamageType2 = new Set(
            array[index2].damage_relations.double_damage_from.map(
              (item: any) => item.name
            )
          );

          const halfDamageType1 = new Set(
            array[index1].damage_relations.half_damage_from.map(
              (item: any) => item.name
            )
          );

          const halfDamageType2 = new Set(
            array[index2].damage_relations.half_damage_from.map(
              (item: any) => item.name
            )
          );

          doubleDamageType1.forEach((type1) => {
            if (!halfDamageType2.has(type1)) {
              weakness.add(type1);
            }
          });

          doubleDamageType2.forEach((type2) => {
            if (!halfDamageType1.has(type2)) {
              weakness.add(type2);
            }
          });
        } else if (!index1) {
          const doubleDamage = new Set(
            array[index1].damage_relations.double_damage_from.map(
              (item: any) => item.name
            )
          );

          doubleDamage.forEach((type1) => {
            weakness.add(type1);
          });
        }
      };

      handleWeaknesses(array, 0, typeDatas.length > 1 ? 1 : undefined);

      return weakness;
    };

    return settingTheSets(typeDatas);
  };

  return fetchTypesFunction(typesList.results);
};
