import PokemonStats from "@/app/sections/PokemonStats";

export default function Pokemon({ params }: { params: { id: string } }) {
  const id = params.id;

  return <PokemonStats id={id} />;
}
