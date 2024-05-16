import { Character, Film} from "./types";

const api = {
    getAllFilms: async (): Promise<Film[]> => {
        try {
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
            
        } catch (error) {
            console.log('error',error)
            return []
        }
    },
    getFilmById: async (film_id:number): Promise<Film> => {
        try {
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
            
        } catch (error) {
            console.log('error',error)
            return {
                title: '' ,
                episode_id: 0,
                director: '',
                characters: [''],
                release_date: '',
                url:  '',
                generic_image: "" 
            }
        }

    
    },
    getCharacterById: async(character_id:string) : Promise<Character> => {
     
        try {
            const data = await fetch(`https://swapi.dev/api/people/${character_id}`)
            .then(res => res.json())
            .catch(e => {
                console.log('character_fetch_error:',e)
                return {};
            })

            const character: Character = {
                name:data.name,
                generic_image:"https://static.tvtropes.org/pmwiki/pub/images/rsz_eucvnjsxmamp1kf.png",
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
        } catch (error) {
            console.log('error',error)
            return {
                name: '',
                generic_image: '',
                eye_color: '',
                gender: '',
                birth_year: '',
                hair_color: '',
                height: '',
                skin_color: '',
                mass: '',
                url: ''
            }
        }
        
    },
    getAllCharacters: async(currentPage:number):Promise<Character[]> => {
       
        try {
            let characters : Character[] = []
            
            const data = await fetch(`https://swapi.dev/api/people/?page=${currentPage}`) 
                .then(res => res.json())
                .catch(e => {
                    console.log('fetchError:',e)
                    return {};
                })
                characters= data.results
                

        characters = characters.map((character:Character)=>{

            return {
                name:character.name,
                generic_image:"https://static.tvtropes.org/pmwiki/pub/images/rsz_eucvnjsxmamp1kf.png",
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

        return characters
        
        } catch (error) {
            console.error("Error fetching characters:", error);
            return []
        }
        
    },
    getCharactersByFilm: async(charactersOnFilm:string[]):Promise<Character[]> => {
       
        try {
            const characters: Character[] = [];
            for (const characterUrl of charactersOnFilm) {
                try {
                    const parts = characterUrl.split("/");
                    const character_id = parts[parts.length - 2];
                    const characterData: Character = await api.getCharacterById(character_id);
                    characters.push(characterData);
                } catch (error) {
                    console.error('Error fetching character data:', error);
                }
            }
            return characters;
        } catch (error) {
            console.error('Error fetching characters by film:', error);
            return []
        }
    }
};

export default api;