export const useHandleEvolutionsCards = async (pokemonData: any) => {
  const data = await Promise.all(
    pokemonData.evolutionData.map(async (evolution: any) => {
      const data = await evolution.fetch;
      if (data) {
        return {
          name: data.name,
          url: data.url,
          order: data.order,
          types: data.types,
          sprite: data.sprite,
          animatedSprite: data.animatedSprite,
        };
      }
      return null;
    })
  );
  return data.filter((item: any) => item !== null);
};
