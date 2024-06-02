import { useRecoilState } from 'recoil'
import { Movie } from '../../typing'
import { modalState, movieState } from '../atoms/Atom'

interface Props {
  movie: Movie
}

function Thumbnail({ movie }: Props) {
    const [, setShowModal] = useRecoilState(modalState)
    const [, setCurrentMovie] = useRecoilState(movieState)

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
    >

      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} alt="" className="rounded-sm object-cover md:rounded h-full w-full " />
    </div>
  )
}

export default Thumbnail