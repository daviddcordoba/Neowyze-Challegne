'use client'
import { Character } from '@/types'
import React from 'react'
import CharacterFullCard from './CharacterFullCard'

const CharactersFullContainer = ({characters}:{characters:Character[]}) => {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 mx-auto">
        {
          characters.map(character => <CharacterFullCard character={character} />)
        }
      </div>
  )
}

export default CharactersFullContainer