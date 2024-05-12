import api from "@/api";
import Link from "next/link";

export default async function CharacterDetailPage({ params: { character_detail_id } }: { params: { character_detail_id: string } }) {
  const character = await api.getCharacterById(character_detail_id);
  
  return (
    <section className="grid grid-cols-2">
      <img
        alt={character.name}
        className="mb-3 h-[400px] object-contain w-full "
        src={character.generic_image}
      />
      <div className="flex flex-col gap-2">
        <h2>{character.name}</h2>
        {(character.eye_color != 'n/a' && character.eye_color !='unknown' &&  character.eye_color != 'none') && <span>Eye color:{character.eye_color}</span>}
        {(character.birth_year != 'n/a' && character.birth_year !='unknown' && character.birth_year != 'none') && <span>Birth year:{character.birth_year}</span>}
        {(character.hair_color != 'n/a' && character.hair_color != 'unknown'&&  character.hair_color != 'none') && <span>Hair color:{character.hair_color}</span>}
        {(character.height != 'n/a' && character.height != 'unknown'&&  character.height!= 'none') && <span>Heigth:{character.height}</span>}
        {(character.skin_color != 'n/a' && character.skin_color != 'unknown'&&  character.skin_color != 'none') && <span>Skin color:{character.skin_color}</span>}
        {(character.mass != 'n/a' && character.mass != 'unknown' && character.mass != 'none') && <span>Mass:{character.mass}</span>}
      </div>

      <Link href={`/characters`}>Volver atras</Link>
      </section>
  );
}