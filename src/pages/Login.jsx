import {useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaSignInAlt } from 'react-icons/fa'
import { login , reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Login = () => {
    const [formData , setFormData] = useState({
        email:'',
        password:'',
    })

    const {email,password} = formData 

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user,isLoading, isError , isSuccess, message} = useSelector((state)=>state.auth)

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess ){
            navigate('/')
        }
        dispatch(reset())

    },[user ,isError ,isSuccess , message , navigate , dispatch ])

    const onChange = (e) => {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {email , password}
        dispatch(login(userData))
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
                <FaSignInAlt /> Login
            </h3>
            <p>Por favor ingresa tus credenciales</p>
          </legend>
          <div className="form-group">
            <label htmlFor="Email" className="form-label mt-4">
              Email address
            </label>
            <input
              type="email"
              name='email'
              className="form-control"
              id="email"
              value={email}
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password" className="form-label mt-4">
              Password
            </label>
            <input
              type="password"
              name='password'
              className="form-control"
              id="password"
              value={password}
              placeholder="Enter your Password"
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

export default Login