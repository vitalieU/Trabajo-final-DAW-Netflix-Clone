

export interface Movie {
    backdrop_path: string;
    id: number;
    original_title: string;
    overview: string;
    poster_path?: string;
    media_type: string;
    adult: boolean;
    title: string;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    origin_country?: string[];
}

export interface Genre {
    id: number;
    name: string;
}

export interface User {
    id: string;
    password?: string;
    email: string;
    created_at: string;
    suscribed: boolean;
}
 
export interface Video {
    id: number;
    video_path: string;
}