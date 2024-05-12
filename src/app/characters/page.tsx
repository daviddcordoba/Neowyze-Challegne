
'use client'
import api from "@/api";
import { Character } from "@/types";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

export default async function CharacterCollection() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  
  const fetch_data = async () => {
    try {
      await api.getAllCharacters(currentPage)
        .then((data)=>{
          setCharacters(data.characters);
          setTotalPages(Math.ceil(data.count / 10));
        })
      } catch (error) {
        console.error("Error fetching characters:", error);
    } 
  };

  useEffect(() => {
    fetch_data();
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setCharacters([])// esto es para evitar que se muestren los personajes viejos por 1ms
    }
  };

  const previusPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setCharacters([])// esto es para evitar que se muestren los personajes viejos por 1ms
    }
  };

  return (
    <section className="grid grid-row-2">
      <div className="flex flex-col justify-center mt-10 gap-4 bg-blue-100 text-black">
        <h1 className="text-center">Paginacion</h1>
        <div className="flex gap-4 justify-center">
          <button onClick={previusPage}>prev</button>
          <span>{currentPage}</span>
          <button onClick={nextPage}>next</button>
        </div>
        <Link href={`/`}>Volver atras</Link>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 mx-auto">
        
          {
            characters.map((character) => {
              const url = character.url;
              const parts = url.split("/");
              const character_id = parts[parts.length - 2];
              
              return (
                <div className="flex flex-col" key={character.name}>
                  <h1>{character.name}</h1>
                  <img
                    alt={character.name}
                    className="mb-3 h-[400px] object-contain w-full "
                    src={character.generic_image}
                  />
                  {(character.eye_color !== 'n/a' && character.eye_color !== 'unknown') && <span>{character.eye_color}</span>}
                  {(character.gender !== 'n/a' && character.gender !== 'unknown') && <span>{character.gender}</span>}
                  <Link href={`/characters/${character_id}`}>Ver mas</Link>
                </div>
              );
            })
          }

      </div>
    </section>
  );
}