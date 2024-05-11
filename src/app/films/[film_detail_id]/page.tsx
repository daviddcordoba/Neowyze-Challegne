import api from "@/api";
import FilmDetailCard from "../../components/FilmDetailCard";
import CharacterContainer from "../../components/CharacterContainer";


export default async function FilmDetailPage({ params: { film_detail_id } }: { params: { film_detail_id: number } }) {
  const film = await api.film_fetch(film_detail_id);

  return (
    <section>
      <FilmDetailCard film={film} />
      <CharacterContainer film={film} />
    </section>
  );
}