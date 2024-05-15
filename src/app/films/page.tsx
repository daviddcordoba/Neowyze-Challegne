import api from "@/app/lib/api";
import FilmCard from "../components/FilmCard";
import Link from "next/link";

export default async function FilmCollection() {
  const films = await api.getAllFilms(); // Server side rendering

  return (
    <section className=" container mx-auto p-4 min-hscreen max-w-5xl">
      <h1 className="text-4xl font-bold text-center my-4">Peliculas</h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {films.map( film => <FilmCard film={film} key={film.episode_id}/>)}
      </div>
      <div className="flex gap-2">

      <Link className="mt-4 self-end text-white hover:text-gray-400" href={`/characters`}>Ir a personajes</Link>
      <Link className="mt-4 self-end text-white hover:text-gray-400" href={`/`}>Ir a inicio</Link>
      </div>
    </section>
  );
}
