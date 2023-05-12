import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { updateMovie , borrarMovie } from "../features/movies/movieSlice";


const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const [datanew, setdatanew] = useState({
    vote_count: 0,
  });
  const { user } = useSelector((state) => state.auth)
  const incrementar = (id) => {
    // setdatanew(datanew.vote_count=movie.vote_count + 1)
    // console.log(datanew);
    // console.log(movie._id);
    // console.log(movie);
    dispatch(updateMovie(id));
  }

  return (
    <div className="col">
      <div className="card h-100">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="poster pelicula" />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <p className="card-text">
          {movie.overview}
          </p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">Last updated 3 mins ago |</small>
          <small className="text-body-secondary">{movie.vote_count}</small>
          <button className='' onClick={()=> incrementar(movie._id) }>❤️</button>
          {user.admin ? (
              <>
              <button className='close' onClick={()=> dispatch(borrarMovie(movie._id)) }>✖︎</button>
              </>
          ):(
              <>
              </>
          )}
        </div>
      </div>
    </div>
    

    // <div className='tarea'>
    //     <div>
    //         {new Date(movie.createdAt).toLocaleString('es-MX')}
    //         <h4>{movie.original_title}</h4>
    //         <button className='close' onClick={()=> dispatch(updateMovie(movie._id , datanew))}>X</button>
    //     </div>
    // </div>
  );
};

export default MovieItem;
