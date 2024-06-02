/**
 * table "public.movies"
 * 
 * Column       |       Type       | Collation | Nullable | Default 
-------------------+------------------+-----------+----------+---------
 backdrop_path     | text             |           |          | 
 id                | bigint           |           | not null | 
 original_title    | text             |           |          | 
 overview          | text             |           |          | 
 poster_path       | text             |           |          | 
 media_type        | text             |           |          | 
 adult             | boolean          |           |          | 
 title             | text             |           |          | 
 original_language | text             |           |          | 
 genre_ids         | json             |           |          | 
 popularity        | double precision |           |          | 
 release_date      | text             |           |          | 
 video             | boolean          |           |          | 
 vote_average      | double precision |           |          | 
 vote_count        | bigint           |           |          | 
 origin_country    | json             |           |          | 
Indexes:
    "movies_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "videos" CONSTRAINT "videos_id_fkey" FOREIGN KEY (id) REFERENCES movies(id)

                          Table "public.genres"
 Column |          Type          | Collation | Nullable | Default 
--------+------------------------+-----------+----------+---------
 id     | integer                |           | not null | 
 name   | character varying(255) |           |          | 
Indexes:
    "genres_pkey" PRIMARY KEY, btree (id)

                                     Table "public.users"
   Column   |            Type             | Collation | Nullable |      Default       
------------+-----------------------------+-----------+----------+--------------------
 id         | uuid                        |           | not null | uuid_generate_v4()
 password   | character varying(50)       |           | not null | 
 email      | character varying(50)       |           | not null | 
 created_at | timestamp without time zone |           | not null | CURRENT_TIMESTAMP
 suscribed  | boolean                     |           |          | false
Indexes:
    "users_pkey" PRIMARY KEY, btree (id)

                    Table "public.videos"
   Column   |  Type  | Collation | Nullable | Default 
------------+--------+-----------+----------+---------
 id         | bigint |           |          | 
 video_path | text   |           |          | 
Foreign-key constraints:
    "videos_id_fkey" FOREIGN KEY (id) REFERENCES movies(id)

 */


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
    password: string;
    email: string;
    created_at: string;
    suscribed: boolean;
}
 
export interface Video {
    id: number;
    video_path: string;
}