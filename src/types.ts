export interface Film{
    title: string;
    generic_image:string;
    episode_id: number;
    director: string;
    characters: string[];
    release_date:string; // esto es un agregado mio
    url:string;
}

export interface Character{
    name:string;
    generic_image:string;
    eye_color:string;
    gender:string;
    birth_year:string;
    hair_color:string;
    height:string;
    skin_color:string;
    mass:number;
    url:string;
}