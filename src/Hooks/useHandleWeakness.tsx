export const HandleWeakness = (
  array: any,
  index1: number | string,
  index2?: number | string
) => {
  const weakness = new Set();
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

    const noDamageType1 = new Set(
      array[index1].damage_relations.no_damage_from.map(
        (item: any) => item.name
      )
    );

    const noDamageType2 = new Set(
      array[index2].damage_relations.no_damage_from.map(
        (item: any) => item.name
      )
    );

    doubleDamageType1.forEach((type1) => {
      if (!halfDamageType2.has(type1) && !noDamageType2.has(type1)) {
        weakness.add(type1);
      }
    });

    doubleDamageType2.forEach((type2) => {
      if (!halfDamageType1.has(type2) && !noDamageType1.has(type2)) {
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

  return weakness;
};
