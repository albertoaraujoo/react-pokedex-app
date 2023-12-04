// import { handleResitancesAndWeaknesses } from "@/Hooks/useResistancesAndWeaknesses";
import PokemonList from "@/sections/PokemonList";

export default async function Home() {
  // const types = await handleResitancesAndWeaknesses("grass", "poison");

  // await console.log(types);

  return <PokemonList />;
}
