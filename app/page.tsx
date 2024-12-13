import PokemonCard from './components/PokemonCard';

export default async function PokemonPage() {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
    if (!res.ok) throw new Error('Erro ao buscar dados');
    const data = await res.json();

    const pokemons = await Promise.all(
      data.results.map(async (pokemon: { name: string; url: string }) => {
        const pokemonData = await fetch(pokemon.url).then((res) => res.json());
        return {
          id: pokemonData.id,
          name: pokemonData.name,
          types: pokemonData.types.map((type: any) => type.type.name),
          weight: pokemonData.weight,
          image: pokemonData.sprites.other['official-artwork'].front_default,
        };
      })
    );

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </div>
    );
  } catch (error) {
    return <div className="text-red-500 text-center">Erro ao carregar a Pokédex</div>;
  }
}