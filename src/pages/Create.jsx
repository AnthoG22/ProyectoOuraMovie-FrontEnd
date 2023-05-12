import {useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createMovie , reset } from '../features/movies/movieSlice'
import Spinner from '../components/Spinner'
import {BiMoviePlay} from 'react-icons/bi'

const Create = () => {
    const [formData , setFormData] = useState({
        adult:'',
        backdrop_path:'',
        genre_ids:'',
        id:'',
        original_language:'',
        original_title:'',
        overview:'',
        popularity:'',
        poster_path:'',
        release_date:'',
        title:'',
        video:'',
        vote_average:'',
        vote_count:''
    })

    const {adult,backdrop_path,genre_ids,id,original_language,original_title,overview,
        popularity,poster_path,release_date, title,video,vote_average,vote_count} = formData 

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state)=>state.auth)
    const {isLoading, isError , isSuccess, message} = useSelector((state)=>state.movie)

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        // if(isSuccess ){
        //     navigate('/')
        // }
        // dispatch(reset())

    },[user ,isError ,isSuccess , message , navigate , dispatch ])

    const onChange = (e) => {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        
        const movieData = {adult,backdrop_path,genre_ids,id,original_language,original_title,overview,
            popularity,poster_path,release_date, title,video,vote_average,vote_count}
        dispatch(createMovie(movieData))
        
        navigate('/')
        
        
    }

    if (isLoading){
        return <Spinner/>
    }

  return (
    <>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>
            <h3>
                <BiMoviePlay /> Register
            </h3>
            <p>Ingresa una nueva Pelicula</p>
          </legend>
          <div className="form-group">
            <label htmlFor="adult" className="form-label mt-4">
              adult
            </label>
            <input
              type="text"
              className="form-control"
              name="adult"
              id="adult"
              value={adult}
              placeholder=""
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="backdrop_path" className="form-label mt-4">
            backdrop_path
            </label>
            <input
              type="text"
              className="form-control"
              name="backdrop_path"
              id="backdrop_path"
              value={backdrop_path}
              placeholder=""
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="genre_ids" className="form-label mt-4">
            genre_ids
            </label>
            <input
              type="array"
              className="form-control"
              name="genre_ids"
              id="genre_ids"
              value={genre_ids}
              placeholder=""
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="id" className="form-label mt-4">
            id
            </label>
            <input
              type="text"
              className="form-control"
              name="id"
              id="id"
              value={id}
              placeholder=""
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="original_language" className="form-label mt-4">
            original_language
            </label>
            <input
              type="text"
              className="form-control"
              name="original_language"
              id="original_language"
              value={original_language}
              placeholder=""
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="original_title" className="form-label mt-4">
            original_title
            </label>
            <input
              type="text"
              className="form-control"
              name="original_title"
              id="original_title"
              value={original_title}
              placeholder=""
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="overview" className="form-label mt-4">
            overview
            </label>
            <input
              type="text"
              className="form-control"
              name="overview"
              id="overview"
              value={overview}
              placeholder=""
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="popularity" className="form-label mt-4">
            popularity
            </label>
            <input
              type="text"
              className="form-control"
              name="popularity"
              id="popularity"
              value={popularity}
              placeholder=""
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="poster_path" className="form-label mt-4">
            poster_path
            </label>
            <input
              type="text"
              className="form-control"
              name="poster_path"
              id="poster_path"
              value={poster_path}
              placeholder=""
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="release_date" className="form-label mt-4">
            release_date
            </label>
            <input
              type="date"
              className="form-control"
              name="release_date"
              id="release_date"
              value={release_date}
              placeholder=""
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title" className="form-label mt-4">
            title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              value={title}
              placeholder=""
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="video" className="form-label mt-4">
            video
            </label>
            <input
              type="text"
              className="form-control"
              name="video"
              id="video"
              value={video}
              placeholder=""
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="vote_average" className="form-label mt-4">
            vote_average
            </label>
            <input
              type="text"
              className="form-control"
              name="vote_average"
              id="vote_average"
              value={vote_average}
              placeholder=""
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="vote_count" className="form-label mt-4">
            vote_count
            </label>
            <input
              type="number"
              className="form-control"
              name="vote_count"
              id="vote_count"
              value={vote_count}
              placeholder=""
              onChange={onChange}
            />
          </div>


          
          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>

        </fieldset>
      </form>
    </>
  );
};

export default Create;