'use client'

import api from "@/api";
import { Character } from "@/types";
import {useEffect, useState } from "react";


export default async function CharacterCollection() {
  const [currentPage,setCurrentPage] = useState<number>(1);
  const [characters,setCharacters] = useState<Character[]>([]);
  const [totalPages,setTotalPages] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    
    const fetch_data = async ()=>{
      setLoading(true);
      
      try {
        const data = await api.getAllCharacters(currentPage);
   
        setCharacters(data.characters)
        setTotalPages(Math.ceil(data.count/10))
      } catch (error) {
        
        console.error("Error fetching characters:", error);
      }finally{
        
        setLoading(false);
      }
      
    };
    fetch_data()
  },[currentPage]);

  const nextPage = ()=>{
    if(currentPage < totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  const previusPage = () => {
    if(currentPage > 1){
      setCurrentPage( currentPage - 1 )
    }
  }

  return (
    <section className="grid grid-row-2">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 mx-auto">
        {!loading &&  (
          characters.map((character) => (
            <div key={character.name}>
              <h1>{character.name}</h1>
            </div>
          ))
        )}
      </div>

      <div className="flex flex-col justify-center mt-10 gap-4">
        <h1 className="text-center">Paginacion</h1>
        <div className="flex gap-4 justify-center">
          <button onClick={previusPage}>prev</button>
            <span>{currentPage}</span>
          <button onClick={nextPage}>next</button>
        </div>
      </div>
  </section>
  );
}

