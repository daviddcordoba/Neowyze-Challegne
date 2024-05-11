import { Character, Film } from "./types";


const films: Film[] = [
    {
        "title": "A New Hope",
        "generic_image": "https://imgc.allpostersimages.com/img/posters/star-wars-a-new-hope-classic-pose_u-L-FAAPZY0.jpg",
        "episode_id": 4,
        "director": "George Lucas",
        "characters": [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/3/",
            "https://swapi.dev/api/people/4/",
            "https://swapi.dev/api/people/5/",
            "https://swapi.dev/api/people/6/",
            "https://swapi.dev/api/people/7/",
            "https://swapi.dev/api/people/8/",
            "https://swapi.dev/api/people/9/",
            "https://swapi.dev/api/people/10/",
            "https://swapi.dev/api/people/12/",
            "https://swapi.dev/api/people/13/",
            "https://swapi.dev/api/people/14/",
            "https://swapi.dev/api/people/15/",
            "https://swapi.dev/api/people/16/",
            "https://swapi.dev/api/people/18/",
            "https://swapi.dev/api/people/19/",
            "https://swapi.dev/api/people/81/"
        ],
        "release_date": "1977-05-25"
    },
    {
        "title": "The Empire Strikes Back",
        "generic_image": "https://imgc.allpostersimages.com/img/posters/star-wars-a-new-hope-classic-pose_u-L-FAAPZY0.jpg",
        "episode_id": 5,
        "director": "Irvin Kershner",
        "characters": [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/3/",
            "https://swapi.dev/api/people/4/",
            "https://swapi.dev/api/people/5/",
            "https://swapi.dev/api/people/10/",
            "https://swapi.dev/api/people/13/",
            "https://swapi.dev/api/people/14/",
            "https://swapi.dev/api/people/18/",
            "https://swapi.dev/api/people/20/",
            "https://swapi.dev/api/people/21/",
            "https://swapi.dev/api/people/22/",
            "https://swapi.dev/api/people/23/",
            "https://swapi.dev/api/people/24/",
            "https://swapi.dev/api/people/25/",
            "https://swapi.dev/api/people/26/"
        ],
        "release_date": "1980-05-17"
    },
    {
        "title": "Return of the Jedi",
        "generic_image": "https://imgc.allpostersimages.com/img/posters/star-wars-a-new-hope-classic-pose_u-L-FAAPZY0.jpg",
        "episode_id": 6,
        "director": "Richard Marquand",
        "characters": [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/3/",
            "https://swapi.dev/api/people/4/",
            "https://swapi.dev/api/people/5/",
            "https://swapi.dev/api/people/10/",
            "https://swapi.dev/api/people/13/",
            "https://swapi.dev/api/people/14/",
            "https://swapi.dev/api/people/16/",
            "https://swapi.dev/api/people/18/",
            "https://swapi.dev/api/people/20/",
            "https://swapi.dev/api/people/21/",
            "https://swapi.dev/api/people/22/",
            "https://swapi.dev/api/people/25/",
            "https://swapi.dev/api/people/27/",
            "https://swapi.dev/api/people/28/",
            "https://swapi.dev/api/people/29/",
            "https://swapi.dev/api/people/30/",
            "https://swapi.dev/api/people/31/",
            "https://swapi.dev/api/people/45/"
        ],
        "release_date": "1983-05-25"
    },
    {
        "title": "The Phantom Menace",
        "generic_image": "https://imgc.allpostersimages.com/img/posters/star-wars-a-new-hope-classic-pose_u-L-FAAPZY0.jpg",
        "episode_id": 1,
        "director": "George Lucas",
        "characters": [
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/3/",
            "https://swapi.dev/api/people/10/",
            "https://swapi.dev/api/people/11/",
            "https://swapi.dev/api/people/16/",
            "https://swapi.dev/api/people/20/",
            "https://swapi.dev/api/people/21/",
            "https://swapi.dev/api/people/32/",
            "https://swapi.dev/api/people/33/",
            "https://swapi.dev/api/people/34/",
            "https://swapi.dev/api/people/35/",
            "https://swapi.dev/api/people/36/",
            "https://swapi.dev/api/people/37/",
            "https://swapi.dev/api/people/38/",
            "https://swapi.dev/api/people/39/",
            "https://swapi.dev/api/people/40/",
            "https://swapi.dev/api/people/41/",
            "https://swapi.dev/api/people/42/",
            "https://swapi.dev/api/people/43/",
            "https://swapi.dev/api/people/44/",
            "https://swapi.dev/api/people/46/",
            "https://swapi.dev/api/people/47/",
            "https://swapi.dev/api/people/48/",
            "https://swapi.dev/api/people/49/",
            "https://swapi.dev/api/people/50/",
            "https://swapi.dev/api/people/51/",
            "https://swapi.dev/api/people/52/",
            "https://swapi.dev/api/people/53/",
            "https://swapi.dev/api/people/54/",
            "https://swapi.dev/api/people/55/",
            "https://swapi.dev/api/people/56/",
            "https://swapi.dev/api/people/57/",
            "https://swapi.dev/api/people/58/",
            "https://swapi.dev/api/people/59/"
        ],
        "release_date": "1999-05-19"
    },
    {
        "title": "Attack of the Clones",
        "generic_image": "https://imgc.allpostersimages.com/img/posters/star-wars-a-new-hope-classic-pose_u-L-FAAPZY0.jpg",
        "episode_id": 2,
        "director": "George Lucas",
        "characters": [
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/3/",
            "https://swapi.dev/api/people/6/",
            "https://swapi.dev/api/people/7/",
            "https://swapi.dev/api/people/10/",
            "https://swapi.dev/api/people/11/",
            "https://swapi.dev/api/people/20/",
            "https://swapi.dev/api/people/21/",
            "https://swapi.dev/api/people/22/",
            "https://swapi.dev/api/people/33/",
            "https://swapi.dev/api/people/35/",
            "https://swapi.dev/api/people/36/",
            "https://swapi.dev/api/people/40/",
            "https://swapi.dev/api/people/43/",
            "https://swapi.dev/api/people/46/",
            "https://swapi.dev/api/people/51/",
            "https://swapi.dev/api/people/52/",
            "https://swapi.dev/api/people/53/",
            "https://swapi.dev/api/people/58/",
            "https://swapi.dev/api/people/59/",
            "https://swapi.dev/api/people/60/",
            "https://swapi.dev/api/people/61/",
            "https://swapi.dev/api/people/62/",
            "https://swapi.dev/api/people/63/",
            "https://swapi.dev/api/people/64/",
            "https://swapi.dev/api/people/65/",
            "https://swapi.dev/api/people/66/",
            "https://swapi.dev/api/people/67/",
            "https://swapi.dev/api/people/68/",
            "https://swapi.dev/api/people/69/",
            "https://swapi.dev/api/people/70/",
            "https://swapi.dev/api/people/71/",
            "https://swapi.dev/api/people/72/",
            "https://swapi.dev/api/people/73/",
            "https://swapi.dev/api/people/74/",
            "https://swapi.dev/api/people/75/",
            "https://swapi.dev/api/people/76/",
            "https://swapi.dev/api/people/77/",
            "https://swapi.dev/api/people/78/",
            "https://swapi.dev/api/people/82/"
        ],
        "release_date": "2002-05-16"
    },
    {
        "title": "Revenge of the Sith",
        "generic_image": "https://imgc.allpostersimages.com/img/posters/star-wars-a-new-hope-classic-pose_u-L-FAAPZY0.jpg",
        "episode_id": 3,
        "director": "George Lucas",
        "characters": [
            "https://swapi.dev/api/people/1/",
            "https://swapi.dev/api/people/2/",
            "https://swapi.dev/api/people/3/",
            "https://swapi.dev/api/people/4/",
            "https://swapi.dev/api/people/5/",
            "https://swapi.dev/api/people/6/",
            "https://swapi.dev/api/people/7/",
            "https://swapi.dev/api/people/10/",
            "https://swapi.dev/api/people/11/",
            "https://swapi.dev/api/people/12/",
            "https://swapi.dev/api/people/13/",
            "https://swapi.dev/api/people/20/",
            "https://swapi.dev/api/people/21/",
            "https://swapi.dev/api/people/33/",
            "https://swapi.dev/api/people/35/",
            "https://swapi.dev/api/people/46/",
            "https://swapi.dev/api/people/51/",
            "https://swapi.dev/api/people/52/",
            "https://swapi.dev/api/people/53/",
            "https://swapi.dev/api/people/54/",
            "https://swapi.dev/api/people/55/",
            "https://swapi.dev/api/people/56/",
            "https://swapi.dev/api/people/58/",
            "https://swapi.dev/api/people/63/",
            "https://swapi.dev/api/people/64/",
            "https://swapi.dev/api/people/67/",
            "https://swapi.dev/api/people/68/",
            "https://swapi.dev/api/people/75/",
            "https://swapi.dev/api/people/78/",
            "https://swapi.dev/api/people/79/",
            "https://swapi.dev/api/people/80/",
            "https://swapi.dev/api/people/81/",
            "https://swapi.dev/api/people/82/",
            "https://swapi.dev/api/people/83/"
        ],
        "release_date": "2005-05-19"
    }
]

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
    list: async (): Promise<Film[]> => {
        const data = await fetch('https://swapi.dev/api/films')
            .then(res => res.json())
            .then(data => data.results)
            .catch(e => {
                console.log('fetchError:',e)
                return [];
            })

            if (!data || data.length === 0) {
                console.log('No data received or data is empty');
                return []; // Retornamos un array vacío si data es undefined o vacío
            }

            const films: Film[] = data.map((film:Film) => {
                return {
                    title: film.title,
                    episode_id:film.episode_id,
                    director:film.director,
                    characters:film.characters,
                    release_date:film.release_date.split('-')[0],
                    generic_image: "https://imgc.allpostersimages.com/img/posters/star-wars-a-new-hope-classic-pose_u-L-FAAPZY0.jpg" // le estoy poniendo a cada 'film' la misma imagen generica
                }
            })

        return films; 
      },
    film_fetch: async (id: Film["episode_id"]): Promise<Film> => {
      await sleep(750);
        
      const film = films.find((film) => film.episode_id === +id);
  
      if (!film) {
        throw new Error(`Film with id ${id} not found`);
      }
  
      return film;
    },
    character_fetch: async(character_url:string) : Promise<Character> => {
        const data = await fetch(character_url)
            .then(res => res.json())
            .catch(e => {
                console.log('character_fetch_error:',e)
                return {};
            })

            const character: Character = {
                name:data.name,
                generic_image:"https://www.komar.de/media/catalog/product/cache/13/image/9df78eab33525d08d6e5fb8d27136e95/0/2/026-dvd2_star_wars_poster_classic_1_web.jpg",
                eye_color:data.eye_color,
                gender:data.gender,
                birth_year:data.birth_year,
                hair_color:data.hair_color,
                height:data.height,
                skin_color:data.skin_color,
                mass:data.mass,
                url: data.url
            }
        return character; 
    }
    
  };
  
  export default api;