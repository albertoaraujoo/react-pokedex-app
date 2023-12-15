// "use client";
// import { PokemonSoloStats } from "@/Hooks/useDataFetching";
import PokemonList from "@/sections/PokemonList";

export default async function Home() {
  // const pokemon = await PokemonSoloStats("412");
  // console.log(pokemon);
  return <PokemonList />;
}
