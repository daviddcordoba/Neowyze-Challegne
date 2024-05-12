import api from "@/api";
import FilmDetailCard from "../../components/FilmDetailCard";
import CharacterContainer from "../../components/CharacterContainer";
import Link from "next/link";


export default async function FilmDetailPage({ params: { film_detail_id } }: { params: { film_detail_id: number } }) {
  const film = await api.getFilmById(film_detail_id);

  return (
    <section>
      <FilmDetailCard film={film} />
      <CharacterContainer film={film} />
      <Link href={`/films`}>Volver atras</Link>
    </section>
  );
}