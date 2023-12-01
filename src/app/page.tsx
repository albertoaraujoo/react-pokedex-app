"use client";
import { handleEffectivenessAndWeaknesses } from "@/Hooks/useEffectivenessAndWeaknesses";
import PokemonList from "@/sections/PokemonList";

export default async function Home() {
  const types = await handleEffectivenessAndWeaknesses("bug", "flying");

  await console.log(types);

  return <PokemonList />;
}
