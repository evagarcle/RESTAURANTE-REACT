import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Reserve from './components/Reserve/Reserve'
import Reserves from "./components/Reserves/Reserves"

const dishes = [
  {
    id: 1,
    name: 'plato 1',
    description: 'Este es el plato 1',
    price: 10
  },
  {
    id: 2,
    name: 'plato 2',
    description: 'Este es el plato 2',
    price: 20
  },
  {
    id: 3,
    name: 'plato 3',
    description: 'Este es el plato 3',
    price: 15
  }
]


function App() {
  return (
     
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element = {<Home dishes={dishes}/>} />
          <Route path="/reserve" element = {<Reserve/>} />
          <Route path="/reserves" element = {<Reserves/>} />
          
        </Routes>
      </Router>
  )
}

export default App
