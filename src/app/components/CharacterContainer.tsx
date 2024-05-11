'use client'

import { Film,Character } from '@/types'
import React, { useEffect, useState } from 'react'
import api from "@/api";
import CharacterCard from './CharacterCard';

const CharacterContainer = ({film}:{film:Film}) => {
    const [characters,setCharacters] = useState<Character[]>([]);

    useEffect(()=>{
        film.characters.forEach(async (characterUrl) => { // esto lo hago asi porque dentro de los films hay un array con todas las url de los characters
            try{
                const characterData : Character = await api.character_fetch(characterUrl);
                setCharacters((prevInfo) => [
                    ...prevInfo,
                    characterData,
                ]);
            } catch (error) {
                console.error('Error fetching character data:', error);
            }
        });
    },[film.characters])
  return (
    <section >
        <h1>Personajes</h1>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                {characters.map((character)=>
                    <CharacterCard character={character}/>
                )}
            </div>
    </section>
  )
}

export default CharacterContainer