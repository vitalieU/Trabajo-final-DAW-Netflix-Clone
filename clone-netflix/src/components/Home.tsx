import {  useRecoilState, useRecoilValue } from 'recoil'
import { modalState, searchResult, searchState, userState } from '../atoms/Atom'
import Banner from './Banner'
import Header from './Header'
import SearchResults from './SearchResults'
import Modal from './Modal'
import Row from './Row'
import { Movie } from '../../typing'
import restService from '../services/restService'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react'


function Home() {
  const showModal = useRecoilValue(modalState);
  const search = useRecoilValue(searchState);
  const [,setUser] =useRecoilState(userState);
  const showsearchResult = useRecoilValue(searchResult)
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'all';
  const [netflixOriginals, setNetflixOriginals] = useState<Movie[]>([]);
  const [trendingNow, setTrendingNow] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [actionMovies, setActionMovies] = useState<Movie[]>([]);
  const [comedyMovies, setComedyMovies] = useState<Movie[]>([]);
  const [horrorMovies, setHorrorMovies] = useState<Movie[]>([]);
  const [romanceMovies, setRomanceMovies] = useState<Movie[]>([]);
  const [documentaries, setDocumentaries] = useState<Movie[]>([]);

  useEffect(() => {
    async function checkIfSuscribed(){

      const resp = await restService.checkUser();
      if(resp.code===0){
        setUser({email:resp.user!.email,suscribed:resp.user!.suscribed})
        return;
      }
      else
      if(resp.code===1){
        setUser({email:resp.user!.email,suscribed:resp.user!.suscribed})
        navigate('/pricing');
      }
      else {
        navigate('/');
      }

    }
    async function fetchMovies() {
      setNetflixOriginals(await restService.getMovies(type!));
      setTrendingNow(await restService.getMoviesByPopularity(type!));
      setTopRated(await restService.getMoviesByRating(type!));
      setActionMovies(await restService.getMoviesByGenre('Action',type!));
      setComedyMovies(await restService.getMoviesByGenre('Comedy',type!));
      setHorrorMovies(await restService.getMoviesByGenre('Horror',type!));
      setRomanceMovies(await restService.getMoviesByGenre('Romance',type!));
      setDocumentaries(await restService.getMoviesByGenre('Documentary',type!));
    }




    fetchMovies().catch((error) => console.error(error));
    checkIfSuscribed().catch((error) => console.error(error));
  }, [type,]);


  return (
    <div
      className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${
        showModal && '!h-screen overflow-hidden'
      }`}
      style={{ maxWidth: '99%' }}
    >

      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">

         {!search ? (
          <>
            <Banner netflixOriginals={netflixOriginals} />
            <section className="md:space-y-24">
              <Row title="Populares" movies={trendingNow} />
              <Row title="Más valorados" movies={topRated} />
              {/*don'have tv shows for this genres so I remove this rows*/
              type !== 'tv' && (
                <>
                  <Row title="Acción" movies={actionMovies} />
                  <Row title="Terror " movies={horrorMovies} />
                  <Row title="Romance" movies={romanceMovies} />
                </>
              )}
              <Row title="Comedias" movies={comedyMovies} />
              <Row title="Documentales" movies={documentaries} />
            </section>
          </>
        ) : (
          <SearchResults movie={showsearchResult!} />
        )}
      </main>
      {showModal && <Modal /> }
    </div>
  )
}

export default Home
