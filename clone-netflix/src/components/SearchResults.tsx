import { Movie } from "../../typing"
import Thumbnail from "./Thumbnail"

interface Props{
    movie: Movie[]
}
export default function SearchResults({movie}: Props){ 
    return(
        <>
            <br/>
            <br/>
            <h2 className="text-2xl text-white text-center">Los resultados de tu busqueda:</h2>
            {
                movie.length !== 0 && (
                    <div className="flex flex-wrap ">
                        {movie.map((movie) => (
                            <div className="p-2 m-4">

                                <Thumbnail key={movie.id} movie={movie}  />
                            </div>
                            
                        ))}
                    </div>
                )
            }
        </>
    )
}