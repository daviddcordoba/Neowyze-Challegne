import { Character} from "../lib/types"
import Link from "next/link"

const CharacterSimpleCard = ({character}:{character:Character}) => {
    const url = character.url;
    const parts = url.split("/");
    const character_id = parts[parts.length - 2];
  return (
        <div className="flex flex-col bg-gray-500 rounded-lg shadow-md p-2"> 
            <span>{character.name}</span>
            <img
                alt={character.name}
                className=" h-[330px] object-contain w-full "
                src={character.generic_image}
            />
            <Link className=" text-white hover:text-gray-400" href={`/characters/${character_id}`} >Ver mas</Link>
        </div>
  )
}

export default CharacterSimpleCard