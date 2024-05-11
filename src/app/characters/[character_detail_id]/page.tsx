import api from "@/api";

export default async function CharacterDetailPage({ params: { character_detail_id } }: { params: { character_detail_id: string } }) {
  const character = await api.character_fetch(`https://swapi.dev/api/people/${character_detail_id}`);
  
  return (
    <section className="grid grid-cols-2">
      <img
        alt={character.name}
        className="mb-3 h-[400px] object-contain w-full "
        src={character.generic_image}
      />
      <div>
        <h2>{character.name}</h2>
        <span>{character.eye_color}</span>
        <span>{character.birth_year}</span>
        <span>{character.hair_color}</span>
        <span>{character.height}</span>
        <span>{character.skin_color}</span>
        <span>{character.mass}</span>
      </div>

      </section>
  );
}