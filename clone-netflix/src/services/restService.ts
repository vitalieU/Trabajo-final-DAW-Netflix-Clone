import { Genre, Movie, User } from "../../typing";




export default {
  async getMovies(media_type:string): Promise<Movie[]> {
    const response = await fetch("/api/media/movies?media_type="+media_type);
    
    return response.json();
  },
  async getMoviesByGenre(genre: string, media_type:string): Promise<Movie[]> {
    const response = await fetch(`/api/media/movies?genre=${genre}&media_type=${media_type}`);
    return response.json();
  },
  getMoviesByPopularity( media_type:string): Promise<Movie[]> {
    const response = fetch(`/api/media/movies?popularity=${true}&media_type=${media_type}`);
    return response.then((res) => res.json());
  },
  getMoviesByRating(media_type:string): Promise<Movie[]> {
    const response = fetch(`/api/media/movies?raiting=${true}&media_type=${media_type}`);
    return response.then((res) => res.json());
  },
  async getMoviesByNetflix(media_type:string): Promise<Movie[]> {
    const response = await fetch(`/api/media/movies?netflix=${true}&media_type=${media_type}`);
    return response.json();
  },
  async getGenre(genre: number): Promise<Genre[]> {
    const response = await fetch(`/api/media/genre?genre=${genre}`);
    return response.json();
  },
  async search (query: string): Promise<Movie[]> {
    const response = await fetch(`/api/media/search?query=${query}`);
    return response.json();
  },
  async login (email: string, password: string): Promise<User|null> {
    const response = await fetch(`/api/auth/login`, {
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
    const response = await fetch(`/api/auth/register`, {
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
  async checkUser(): Promise<{user:User|null, code:number}> {
    const response = await fetch(`/api/auth/check-user`,{
      method: 'GET',
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json',
      }
    })
    if(response.status === 200){
      const user :User = await response.json();
      if(user.suscribed){
        return {user, code: 0};
      }
      else{
        return {user, code: 1};
      
      }
    }
    else{
      return {user: null, code: 2};
    }
  },
  async requestSubscription(email: string, item: string): Promise<string> {
    const response = await fetch(`/api/payment/create-subscription`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, item})
    });
    return response.json();
  },
  async checkSubscription(email: string): Promise<{suscribed:boolean, user?:User}> {
    const response = await fetch(`/api/payment/check-subscription?email=${email}`);
    return response.json();
  },
  async addMovieToWatchlist(movie_id: number): Promise<boolean> {
    const response = await fetch(`/api/auth/add-movie-to-watchlist`, {
      method: 'POST',
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({movie_id})
    });
    return response.ok;
  },
  async removeMovieFromWatchlist(movie_id: number): Promise<boolean> {
    const response = await fetch(`/api/auth/remove-movie-from-watchlist`, {
      method: 'DELETE',
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({movie_id})
    });
    return response.ok;
  },
  async   getWatchlist(): Promise<string[]>{
    const response = await fetch(`/api/media/watchlist`,
    {
      method: 'GET',
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
    return response.json();
  },
  async getUsers():Promise<{id:string, email:string, created_at:Date, suscribed:boolean}[]>{
    const response = await fetch(`/api/stats/users`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.json();
  },
  async getAllMovies(media_type:string): Promise<{id:string, title:string, release_date:string, genres:{name:string}[]}[]> {
    if(media_type === 'movie'){
      const response = await fetch(`/api/stats/movies`);
      return response.json();
    }
    else{
      const response = await fetch(`/api/stats/tvshows`);
      return response.json();
    }
  }
  
};





