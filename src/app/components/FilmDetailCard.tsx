
import { Film} from "../lib/types"

const FilmDetailCard = ({film}:{film:Film}) => {
    
  return (
    <article>
            <h2 className=" inline-flex gap-2 text-lg font-bold">
              <span>{film.episode_id} - {film.title}</span>
              <small className="inline-flex gap-1 mx-auto">
                <span className="font-normal opacity-75">({film.release_date})</span>
              </small>
            </h2>
            <img
              alt={film.title}
              className="mb-3 h-[400px] object-contain w-full "
              src={film.generic_image}
            />
    </article>
  )
}

export default FilmDetailCard