import { Character } from "../lib/types"
import Link from "next/link"


const CharacterFullCard = ({character}:{character:Character}) => {
    const url = character.url;
    const parts = url.split("/");
    const character_id = parts[parts.length - 2];
  return (
    <div className="flex flex-col bg-gray-500 rounded-lg shadow-md p-2" key={character.name}>
        <h1>{character.name}</h1>
        <img
            alt={character.name}
            className="mb-3 h-[200px] object-contain w-full "
                  src={character.generic_image}
        />
        {(character.eye_color !== 'n/a' && character.eye_color !== 'unknown') && <span>Eye Color: {character.eye_color}</span>}
        {(character.gender !== 'n/a' && character.gender !== 'unknown') && <span>Gender: {character.gender}</span>}
        <Link className="mt-4  text-white hover:text-gray-400" href={`/characters/${character_id}`}>Ver mas</Link>
    </div>
  )
}

export default CharacterFullCard