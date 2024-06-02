import { Genre, Movie, User } from "../../../typing";
const endpoint = "http://localhost:3003";

//rest service to make http calls

export default {
  async getMovies(): Promise<Movie[]> {
    const response = await fetch(endpoint+"/api/movies");
    
    return response.json();
  },
  async getMoviesByGenre(genre: string): Promise<Movie[]> {
    const response = await fetch(endpoint+`/api/movies?genre=${genre}`);
    return response.json();
  },
  getMoviesByPopularity(): Promise<Movie[]> {
    const response = fetch(endpoint+`/api/movies?popularity=${true}`);
    return response.then((res) => res.json());
  },
  getMoviesByRating(): Promise<Movie[]> {
    const response = fetch(endpoint+`/api/movies?raiting=${true}`);
    return response.then((res) => res.json());
  },
  async getMoviesByNetflix(): Promise<Movie[]> {
    const response = await fetch(endpoint+`/api/movies?netflix=${true}`);
    return response.json();
  },
  async getGenre(genre: number): Promise<Genre[]> {
    const response = await fetch(endpoint+`/api/genre?genre=${genre}`);
    return response.json();
  },
  async streamVideo(id: number): Promise<Movie[]> {
    const response = await fetch(endpoint+`/api/stream?id=${id}`);
    return response.json();
  },
  async login (email: string, password: string): Promise<User|null> {
    const response = await fetch(endpoint+`/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    });
    if(response.ok){
      return response.json();
    }else{
      return null;
    }
  },
  async register (email: string, password: string): Promise<User|null> {
    const response = await fetch(endpoint+`/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:email, pass:password})
    });
    if(response.ok){
      return response.json();
    }else{
      return null;
    }
  }
  
};



