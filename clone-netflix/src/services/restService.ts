import { Genre, Movie, User } from "../../typing";
const endpoint = "http://localhost:3003";



export default {
  async getMovies(): Promise<Movie[]> {
    const response = await fetch(endpoint+"/api/media/movies");
    
    return response.json();
  },
  async getMoviesByGenre(genre: string): Promise<Movie[]> {
    const response = await fetch(endpoint+`/api/media/movies?genre=${genre}`);
    return response.json();
  },
  getMoviesByPopularity(): Promise<Movie[]> {
    const response = fetch(endpoint+`/api/media/movies?popularity=${true}`);
    return response.then((res) => res.json());
  },
  getMoviesByRating(): Promise<Movie[]> {
    const response = fetch(endpoint+`/api/media/movies?raiting=${true}`);
    return response.then((res) => res.json());
  },
  async getMoviesByNetflix(): Promise<Movie[]> {
    const response = await fetch(endpoint+`/api/media/movies?netflix=${true}`);
    return response.json();
  },
  async getGenre(genre: number): Promise<Genre[]> {
    const response = await fetch(endpoint+`/api/media/genre?genre=${genre}`);
    return response.json();
  },
  async login (email: string, password: string): Promise<User|null> {
    const response = await fetch(endpoint+`/api/auth/login`, {
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
    const response = await fetch(endpoint+`/api/auth/register`, {
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
  },
  async requestSubscription(email: string, item: string): Promise<string> {
    const response = await fetch(endpoint+`/api/payment/create-subscription`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, item})
    });
    return response.json();
  },
  async checkSubscription(email: string): Promise<{suscribed:boolean, user?:User}> {
    const response = await fetch(endpoint+`/api/payment/check-suscription?email=${email}`);
    return response.json();
  }
  
};



