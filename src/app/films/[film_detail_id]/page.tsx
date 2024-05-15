import api from "@/app/lib/api";
import FilmDetailCard from "../../components/FilmDetailCard";
import Link from "next/link";
import CastContainer from "@/app/components/CastContainer";


export default async function FilmDetailPage({ params: { film_detail_id } }: { params: { film_detail_id: number } }) {
  const film = await api.getFilmById(film_detail_id); // ssr

  return (
    <section  className="container mx-auto p-4 min-hscreen max-w-5xl">
      <FilmDetailCard film={film} />
      <CastContainer film={film} />
      <div className="flex gap-2">
        <Link className="mt-4 self-end text-white hover:text-gray-400" href={`/characters`}>Ir a personajes</Link>
        <Link className="mt-4 self-end text-white hover:text-gray-400" href={`/`}>Ir a inicio</Link>
        <Link className="mt-4 self-end text-white hover:text-gray-400" href={`/films`}>Ir a peliculas</Link>
      </div>
    </section>
  );
}