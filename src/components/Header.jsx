import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { BiMoviePlay } from 'react-icons/bi'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <BiMoviePlay/> OURA MOVIES
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
          {user ? (
              user.admin ? (
                <>
                <li className="nav-item">
                <Link className='nav-link' to='/'> HOME</Link>
                </li>

                <li className="nav-item">
                <Link className='nav-link' to='/create'> CREATE</Link>
                </li>
    
                <li className="nav-item">
                <Link className='nav-link' to='/login' onClick={onLogout}> <FaSignOutAlt /> Logout</Link>
                </li>
    
                </>
              ):(
            <>
            <li className="nav-item">
            <Link className='nav-link' to='/'> HOME</Link>
            </li>

            <li className="nav-item">
            <Link className='nav-link' to='/login' onClick={onLogout}> <FaSignOutAlt /> Logout</Link>
            </li>

            </>
              )
            
          ):(
            <>
            <li className="nav-item">
              <Link className='nav-link' to='/'> HOME</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/login'><FaSignInAlt /> Login</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/register'><FaUser /> Register</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/about'> About</Link>
            </li>
          
          
          </>
          )}
           </ul> 
           <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header