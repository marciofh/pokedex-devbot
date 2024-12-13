import { typeColors } from '../utils/colorMap';

interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
  weight: number;
  image: string;
}

export default function PokemonCard({ id, name, types, weight, image }: PokemonCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <img src={image} alt={name} className="w-24 h-24 mx-auto" />
      <h3 className="text-xl font-bold mt-2">{name.toUpperCase()}</h3>
      <p className="text-gray-600">ID: {id}</p>
      <p className="text-gray-600">Peso: {weight} kg</p>

      <div className="flex justify-center space-x-2 mt-2">
        {types.map((type) => (
          <span
            key={type}
            className={`px-2 py-1 rounded-full text-sm ${typeColors[type] || 'bg-gray-200 text-black'}`}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}