// "use client";
import { IdProp } from "@/interfaces/interfaces";
import TypeComponent from "./typeComponent";
import { handleResitancesAndWeaknesses } from "@/Hooks/useResistancesAndWeaknesses";
import { PokemonSoloStats } from "@/Hooks/useDataFetching";

const WeaknessAndResistances = async ({ id }: IdProp) => {
  const pokemon = await PokemonSoloStats(id);

  const data = await handleResitancesAndWeaknesses(
    `${pokemon.pokemonData.types[0]?.type?.name}`,
    `${
      pokemon.pokemonData.types.length > 1
        ? pokemon.pokemonData.types[1].type.name
        : ""
    }`
  );

  await console.log(data);

  return (
    <div>
      {data.resistances.map((item: any) => (
        <div key={item}>{item}</div>
      ))}
      <hr />
      {data.weakness.map((item: any) => (
        <div key={item}>{item}</div>
      ))}
    </div>
    // <h2>{id}</h2>
  );
};

export default WeaknessAndResistances;
