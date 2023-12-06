// "use client";
// import { PokemonSoloStats } from "@/Hooks/useDataFetching";
import PokemonList from "@/sections/PokemonList";

export default async function Home() {
  // const pokemon = await PokemonSoloStats("1");

  // await console.log(pokemon);

  return <PokemonList />;
}
