import { Character} from "@/types"
import Link from "next/link"
/* Esa puede ser solo la que uso para mostrar en el detalle del film */
const CharacterSimpleCard = ({character}:{character:Character}) => {
    const url = character.url;
    const parts = url.split("/");
    const character_id = parts[parts.length - 2];
  return (
        <div> 
            <span>{character.name}</span>
            <img
                alt={character.name}
                className="mb-3 h-[400px] object-contain w-full "
                src={character.generic_image}
            />
            <Link href={`/characters/${character_id}`} >Ver mas</Link>
        </div>
  )
}

export default CharacterSimpleCard