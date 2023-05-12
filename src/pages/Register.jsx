import {useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register , reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

const Register = () => {
    const [formData , setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:'',
    })

    const {name,email,password,password2} = formData 

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user,isLoading, isError , isSuccess, message} = useSelector((state)=>state.auth)

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if(isSuccess ){
            navigate('/login')
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
        if(password !== password2){
            toast.error('Las contraseñas no coinciden')
        }else{
            const userData = {name, email , password}
            dispatch(register(userData))
        }
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
                <FaUser /> Register
            </h3>
            <p>Por favor crea una cuenta</p>
          </legend>
          <div className="form-group">
            <label htmlFor="Name" className="form-label mt-4">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={name}
              placeholder="Enter your Password"
              onChange={onChange}
            />
          </div>
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
            <small id="emailHelp" className="form-text text-muted">
              We will never share your email with anyone else.
            </small>
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

          <div className="form-group">
            <label htmlFor="Password2" className="form-label mt-4">
              Confirm your Password
            </label>
            <input
              type="password"
              name='password2'
              value={password2}
              className="form-control"
              id="password2"
              placeholder="Enter your Password again"
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

export default Register;
