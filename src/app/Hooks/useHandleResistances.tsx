export const HandleResistances = (
  array: any,
  index1: number | string,
  index2?: number | string
) => {
  const resistances = new Set();
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
      array[index1]?.damage_relations.no_damage_from?.map(
        (item: any) => item?.name
      )
    );

    const noDamageType2 = new Set(
      array[index2]?.damage_relations.no_damage_from?.map(
        (item: any) => item?.name
      )
    );

    noDamageType1.forEach((type1) => {
      resistances.add(type1);
    });

    noDamageType2.forEach((type2) => {
      resistances.add(type2);
    });

    halfDamageType1.forEach((type1) => {
      if (!doubleDamageType2.has(type1)) {
        resistances.add(type1);
      }
    });

    halfDamageType2.forEach((type2) => {
      if (!doubleDamageType1.has(type2)) {
        resistances.add(type2);
      }
    });
  } else if (!index1) {
    const halfDamage = new Set(
      array[index1].damage_relations.half_damage_from.map(
        (item: any) => item.name
      )
    );

    halfDamage.forEach((type1) => {
      resistances.add(type1);
    });

    const noDamage = new Set(
      array[index1].damage_relations.no_damage_from.map(
        (item: any) => item.name
      )
    );
    noDamage.forEach((type1) => {
      resistances.add(type1);
    });
  }

  return resistances;
};
