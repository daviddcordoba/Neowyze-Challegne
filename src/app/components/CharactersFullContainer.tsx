'use client'
import { Character } from '../lib/types'
import React from 'react'
import CharacterFullCard from './CharacterFullCard'

const CharactersFullContainer = ({characters}:{characters:Character[]}) => {
    
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 mx-auto py-3">
        {
          characters.map(character => <CharacterFullCard key={character.name} character={character} />)
        }
      </div>
  )
}

export default CharactersFullContainer