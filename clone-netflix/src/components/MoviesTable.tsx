import { useEffect, useState } from "react";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { useNavigate, useSearchParams } from "react-router-dom";
import restService from "../services/restService";

export default function MoviesTable() {
  const [movies, setMovies] = useState<{ id:string, title:string, release_date:string, genres:{name:string}[]}[]>([]);
  const [movieToShow, setMovieToShow] = useState<{ id:string, title:string, release_date:string, genres:{name:string}[]}[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [searchParams] = useSearchParams();
  const type =searchParams.get('type');
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
        let response;
        if(type === 'tv'){
            response = await restService.getAllMovies(type);
        }
        else{
            response = await restService.getAllMovies('movie');
        }
      if (response) {
        setMovies(response);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    setMovieToShow(movies.slice(indexOfFirstUser, indexOfLastUser));
  }, [currentPage, pageNumbers, movies]);

  useEffect(() => {
    for (let i = 1; i <= Math.ceil(movies.length / usersPerPage); i++) {
      const _pageNumbers = pageNumbers;
      _pageNumbers.push(i);
      setPageNumbers(pageNumbers);
    }
  }, [movies]);
  function handleClickChangePage(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    setCurrentPage(Number(event.currentTarget.id));
  }

  return (
    <div>
        <br/>
        <br/>

        <button onClick={()=>{navigate('/admin')}}><ArrowLeftEndOnRectangleIcon className=" w-10 text-gray-500 dark:text-gray-400 m-2" /></button>
    <h1 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
        {
            type === 'tv' ? 'Series' : 'Películas'
        }
    </h1>

    <br/>
    <br/>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              Título
            </th>           
            <th scope="col" className="px-6 py-3">
              Fecha de lanzamiento
            </th>
            <th scope="col" className="px-6 py-3">
                Género
            </th>

          </tr>
        </thead>
        <tbody>
          {movieToShow.map((movie) => (
            <tr
              key={movie.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {movie.id}
              </th>
              <td className="px-6 py-4">{movie.title}</td>
              <td className="px-6 py-4">{new Date(movie.release_date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' })}</td>
              <td className="px-6 py-4">{movie.genres.map((genre) => genre.name).join(", ")}</td>
              
                
            </tr>
          ))}
        </tbody>
      </table>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Página{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {currentPage} -{pageNumbers.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {movies.length}
          </span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                id={number.toString()}
                onClick={handleClickChangePage}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <br/>
      <br/>
    </div>
    </div>
  );
}
