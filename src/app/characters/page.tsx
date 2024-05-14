import api from "@/api";
import CharactersFullContainer from "../components/CharactersFullContainer";
import LoadMore from "../components/LoadMore";

export default async function CharacterCollection() { //ssr
 
 const characters = await api.getAllCharacters(1);

  /* const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      }
  }; */

  /* const previusPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      }
  }; */


  return (
    <section className="container mx-auto p-4 min-hscreen max-w-5xl">
      <h1 className="text-3xl font-bold  mb-4 text-center">Personajes</h1>

      <CharactersFullContainer characters={characters}/>
      <LoadMore/>
    </section>
  );
}