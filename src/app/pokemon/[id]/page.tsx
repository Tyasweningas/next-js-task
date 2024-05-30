import React from 'react';

interface PokemonParams {
  id: string;
  types: string;
  description: string;
}

function DetailPokemon({ params }: { params: PokemonParams }) {
  const { id, types, description } = params;

  return (
    <div>
      <h1 className='text-white'>ID: {id}</h1>
      <h2>Types: {types}</h2>
      <p>Description: {description}</p>
    </div>
  );
}

export default DetailPokemon;