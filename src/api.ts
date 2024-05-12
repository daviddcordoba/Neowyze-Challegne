import { Character, Film, PaginatedCharacterResponse } from "./types";


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
                    url: film.url,
                    generic_image: "https://imgc.allpostersimages.com/img/posters/star-wars-a-new-hope-classic-pose_u-L-FAAPZY0.jpg" // le estoy poniendo a cada 'film' la misma imagen generica
                }
            })

        return films; 
    },
    film_fetch: async (film_id:number): Promise<Film> => {
        await sleep(750);

        const data = await fetch(`https://swapi.dev/api/films/${film_id}`)
        .then(res => res.json())
        .catch(e => {
            console.log('film_fetch_error:',e)
            return {};
        })

        const film : Film = {
            title: data.title,
            episode_id:data.episode_id,
            director:data.director,
            characters:data.characters,
            release_date:data.release_date.split('-')[0],
            url: data.url,
            generic_image: "https://imgc.allpostersimages.com/img/posters/star-wars-a-new-hope-classic-pose_u-L-FAAPZY0.jpg" // le estoy poniendo a cada 'film' la misma imagen generica
                
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
    },
    getAllCharacters: async(currentPage:number):Promise<PaginatedCharacterResponse> => {
        const data = await fetch(`https://swapi.dev/api/people/?page=${currentPage}`) 
        .then(res => res.json())
        .catch(e => {
            console.log('fetchError:',e)
            return {};
        })
        const characters = data.results.map((character:Character)=>{
            return {
                name:character.name,
                generic_image:"https://www.komar.de/media/catalog/product/cache/13/image/9df78eab33525d08d6e5fb8d27136e95/0/2/026-dvd2_star_wars_poster_classic_1_web.jpg",
                eye_color:character.eye_color,
                gender:character.gender,
                birth_year:character.birth_year,
                hair_color:character.hair_color,
                height:character.height,
                skin_color:character.skin_color,
                mass:character.mass,
                url: character.url
            }
        })
        return {
            count:data.count,
            characters:characters
        }
    }
};

export default api;