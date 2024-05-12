import api from "@/api";
import FilmCard from "../components/FilmCard";
import Link from "next/link";


export default async function FilmCollection() {
  const films = await api.getAllFilms(); // Server side rendering

  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {films.map((film) => <FilmCard film={film} key={film.episode_id}/>)}
      <Link href={`/`}>Volver atras</Link>
    </section>
  );
}
