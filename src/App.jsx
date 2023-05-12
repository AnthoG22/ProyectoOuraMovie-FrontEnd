import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Header from "./components/Header"
import About from './pages/About'
import './index.css'
import Create from './pages/Create'

function App() {
  

  return (
    <>
      <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/create' element={<Create/>}/>
          </Routes>
      </Router>
      <ToastContainer/>
    </>
  )
}

export default App
