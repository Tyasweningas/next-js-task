import Image from "next/image";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://pokeapi.deno.dev/pokemon?limit=20");
  return response.json();
}

export default async function PokemonPage() {
  const pokemons = await getData();
  console.log(pokemons)

  return (
    <section>
     
      <h2 className="text-xl text-gray-300 text-left pb-6 pt-6 bg-slate-700">Findyour-Pokemon</h2>
      
      <div className="flex flex-row gap-4 flex-wrap">
      {pokemons.map((pokemon: any) => (
        <div key={pokemon.id} className="w-52 border-2 border-gray-900">
        <Link href={`/pokemon/${pokemon.id}/`}>

              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                width={200}
                height={200}
                className="h-40 object-cover"
              />
              <h2 className="text-center text-xl font-bold text-white">{pokemon.name}</h2>
            </Link>
          
        </div>
      ))}
      </div>
    </section>
  );
}
