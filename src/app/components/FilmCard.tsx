
import Link from 'next/link';
import { Film } from '../lib/types';

const FilmCard = ({film} : {film:Film}) => {
  const url =film.url;
  const parts = url.split("/");
  const film_id = parts[parts.length - 2];

  return (
    <article className='flex flex-col items-center bg-gray-500 rounded-lg shadow-md p-2' key={film.episode_id}>
            <img
              alt={film.title}
              className="mb-3 h-[300px] object-contain  "
              src={film.generic_image}
            />
            <h2 className="inline-flex text-lg font-bold">
              <Link className=" text-white hover:text-gray-400" href={`/films/${film_id}`}>{film.episode_id} - {film.title}</Link>
              <small className="ml-2">
                <span className="font-normal opacity-75">({film.release_date.split('-')[0]})</span>
              </small>
            </h2>
    </article>
  )
}

export default FilmCard


/*
ACLARACION :
Si bien el numero de episodio puede ser '4' no significa que al momento de viajar a la url del detalle ese sea el numero que se vea en la url.
 */