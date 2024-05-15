
import api from "@/app/lib/api";
import CharacterSimpleCard from './CharacterSimpleCard';
import { Character,Film } from '../lib/types';

const CastContainer = async ({film}:{film:Film}) => {
    const characterCast : Character [] = await api.getCharactersByFilm(film.characters)
  return (
    <section className='container mx-auto p-4 min-hscreen max-w-5xl'>
            <h1 className='text-center text-xl my-5'>Reparto</h1>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {characterCast.map((character)=>
                    <CharacterSimpleCard character={character} key={character.name}/>
                )}
            </div>
    </section>
  )
}

export default CastContainer