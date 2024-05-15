import api from "@/app/lib/api";
import Link from "next/link";

export default async function CharacterDetailPage({ params: { character_detail_id } }: { params: { character_detail_id: string } }) {
  const character = await api.getCharacterById(character_detail_id);
  
  return (
    <section className="grid grid-cols-2">
      <img
        alt={character.name}
        className="h-[400px] object-contain w-full rounded-lg shadow-lg"
        src={character.generic_image}
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold">{character.name}</h2>
        {(character.eye_color != 'n/a' && character.eye_color !='unknown' &&  character.eye_color != 'none') && <span className="text-lg">Eye color: {character.eye_color}</span>}
        {(character.birth_year != 'n/a' && character.birth_year !='unknown' && character.birth_year != 'none') && <span className="text-lg">Birth year: {character.birth_year}</span>}
        {(character.hair_color != 'n/a' && character.hair_color != 'unknown'&&  character.hair_color != 'none') && <span className="text-lg">Hair color: {character.hair_color}</span>}
        {(character.height != 'n/a' && character.height != 'unknown'&&  character.height!= 'none') && <span className="text-lg">Heigth: {character.height}</span>}
        {(character.skin_color != 'n/a' && character.skin_color != 'unknown'&&  character.skin_color != 'none') && <span className="text-lg">Skin color: {character.skin_color}</span>}
        {(character.mass != 'n/a' && character.mass != 'unknown' && character.mass != 'none') && <span className="text-lg">Mass: {character.mass}</span>}
      </div>
      <div className="flex gap-2">

      <Link className="mt-4 self-end text-white hover:text-gray-400" href={`/characters`}>Ir a personajes</Link>
      <Link className="mt-4 self-end text-white hover:text-gray-400" href={`/`}>Ir a inicio</Link>
      <Link className="mt-4 self-end text-white hover:text-gray-400" href={`/films`}>Ir a peliculas</Link>
      </div>
      </section>
  );
}