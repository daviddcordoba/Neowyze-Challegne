'use client'

import { Film,Character } from '@/types'
import React, { useEffect, useState } from 'react'
import api from "@/api";
import CharacterSimpleCard from './CharacterSimpleCard';

const CharacterContainer = ({film}:{film:Film}) => {
    const [characters,setCharacters] = useState<Character[]>([]);
    useEffect(()=>{
        const fetchCharacters = async () => {
            for (const characterUrl of film.characters) {
              try {
                const parts = characterUrl.split("/");
                const character_id = parts[parts.length - 2];
                const characterData: Character = await api.getCharacterById(character_id);
                setCharacters((prevInfo) => [
                  ...prevInfo,
                  characterData,
                ]);
              } catch (error) {
                console.error('Error fetching character data:', error);
              }
            }
          };
      
          fetchCharacters();
    },[film.characters])
  return (
    <section >
            <h1 className='text-center text-xl my-5'>Reparto</h1>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                {characters.map((character)=>
                    <CharacterSimpleCard character={character} key={character.name}/>
                )}
            </div>
    </section>
  )
}

export default CharacterContainer