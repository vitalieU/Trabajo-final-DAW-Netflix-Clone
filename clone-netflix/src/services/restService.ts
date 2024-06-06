import { Genre, Movie, User } from "../../typing";

const endpoint = "http://localhost:3003";



export default {
  async getMovies(media_type:string): Promise<Movie[]> {
    const response = await fetch(endpoint+"/api/media/movies?media_type="+media_type);
    
    return response.json();
  },
  async getMoviesByGenre(genre: string, media_type:string): Promise<Movie[]> {
    const response = await fetch(endpoint+`/api/media/movies?genre=${genre}&media_type=${media_type}`);
    return response.json();
  },
  getMoviesByPopularity( media_type:string): Promise<Movie[]> {
    const response = fetch(endpoint+`/api/media/movies?popularity=${true}&media_type=${media_type}`);
    return response.then((res) => res.json());
  },
  getMoviesByRating(media_type:string): Promise<Movie[]> {
    const response = fetch(endpoint+`/api/media/movies?raiting=${true}&media_type=${media_type}`);
    return response.then((res) => res.json());
  },
  async getMoviesByNetflix(media_type:string): Promise<Movie[]> {
    const response = await fetch(endpoint+`/api/media/movies?netflix=${true}&media_type=${media_type}`);
    return response.json();
  },
  async getGenre(genre: number): Promise<Genre[]> {
    const response = await fetch(endpoint+`/api/media/genre?genre=${genre}`);
    return response.json();
  },
  async login (email: string, password: string): Promise<User|null> {
    const response = await fetch(endpoint+`/api/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
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
      credentials: 'include',
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
  async checkUser(): Promise<User|null> {
    const response = await fetch(endpoint+`/api/auth/check-user`,{
      method: 'GET',
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json',
      }
    })
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
    const response = await fetch(endpoint+`/api/payment/check-subscription?email=${email}`);
    return response.json();
  }
  
};



