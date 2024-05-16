'use client'
import api from "@/app/lib/api";
import CharactersFullContainer from "../components/CharactersFullContainer";
import LoadMore from "../components/LoadMore";
import Link from "next/link";



export default async function CharacterCollection() { //ssr

  const characters = await api.getAllCharacters(1);

  return (
    <div>
      <h1 className="text-3xl font-bold  mb-4 text-center">Personajes</h1>
      <CharactersFullContainer characters={characters}/>
      <LoadMore/>
      <div className="flex gap-2">
        <Link className="mt-4 self-end text-white hover:text-gray-400" href={`/`}>Ir a inicio</Link>
        <Link className="mt-4 self-end text-white hover:text-gray-400" href={`/films`}>Ir a peliculas</Link>
      </div>
    </div>
  );
}