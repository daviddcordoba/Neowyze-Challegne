
import Link from 'next/link';
import { Film } from '@/types';

const FilmCard = ({film} : {film:Film}) => {
  return (
    <article key={film.episode_id}>
            <img
              alt={film.title}
              className="mb-3 h-[400px] object-contain w-full "
              src={film.generic_image}
            />
            <h2 className="inline-flex gap-2 text-lg font-bold">
              <Link href={`/films/${film.episode_id}`}>{film.episode_id} - {film.title}</Link>
              <small className="inline-flex gap-1 mx-auto">
                <span className="font-normal opacity-75">({film.release_date.split('-')[0]})</span>
              </small>
            </h2>
    </article>
  )
}

export default FilmCard