import { useRecoilValue } from 'recoil'
import { modalState } from '../atoms/Atom'
import Banner from './Banner'
import Header from './Header'
import Modal from './Modal'
import Row from './Row'
import { Movie } from '../../typing'
import restService from '../services/restService'
import { useEffect, useState } from 'react'


function Home() {
  const showModal = useRecoilValue(modalState);
  const [netflixOriginals, setNetflixOriginals] = useState<Movie[]>([]);
  const [trendingNow, setTrendingNow] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [actionMovies, setActionMovies] = useState<Movie[]>([]);
  const [comedyMovies, setComedyMovies] = useState<Movie[]>([]);
  const [horrorMovies, setHorrorMovies] = useState<Movie[]>([]);
  const [romanceMovies, setRomanceMovies] = useState<Movie[]>([]);
  const [documentaries, setDocumentaries] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      setNetflixOriginals(await restService.getMovies());
      setTrendingNow(await restService.getMoviesByPopularity());
      setTopRated(await restService.getMoviesByRating());
      setActionMovies(await restService.getMoviesByGenre('Action'));
      setComedyMovies(await restService.getMoviesByGenre('Comedy'));
      setHorrorMovies(await restService.getMoviesByGenre('Horror'));
      setRomanceMovies(await restService.getMoviesByGenre('Romance'));
      setDocumentaries(await restService.getMoviesByGenre('Documentary'));
    }

    fetchMovies().catch((error) => console.error(error));
  }, []);


  return (
    <div
      className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${
        showModal && '!h-screen overflow-hidden'
      }`}
    >

      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List Component */}
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  )
}

export default Home
