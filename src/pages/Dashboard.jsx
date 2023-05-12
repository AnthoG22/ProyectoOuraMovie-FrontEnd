import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { getMovies, reset } from '../features/movies/movieSlice'
import MovieItem from '../components/MovieItem'
import { toast } from 'react-toastify'

const Dashboard = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { movies, isLoading, isError, message } = useSelector((state) => state.movie)

    useEffect(() => {

        if (isError) {
            toast.error(message)
        }

        if (!user) {
            navigate('/login')
        }else{

            dispatch(getMovies())
        }


        return () => {
            dispatch(reset())
        }

    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h4>Bienvenido {user && user.name}</h4>
                <p>Movies</p>
            </section>

            <div >
                {movies.length > 0 ? (
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {movies.map((movie) => (
                            <MovieItem key={movie._id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <h4>No existen peliculas disponibles para ver</h4>
                )}
            </div>
        </>
    )
}


export default Dashboard
