import { Link, Route, Routes }from 'react-router-dom'
import { Home } from './pages/Home'
import { Llamas } from './pages/Llamas'
import { Alpaca } from './pages/Alpaca'
import './App.css'

function App() {
  

  return (
    <>
    {/* Naviagtion here */}
    <ul className='nav'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/llamas">Llamas</Link></li>
      <li><Link to="/alpacas">Alpacas</Link></li>
    </ul>
    {/* Routes here */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/llamas" element={<Llamas />} />
      <Route path="/alpacas" element={<Alpaca />} />
    </Routes>
    </>
  )
}

export default App
