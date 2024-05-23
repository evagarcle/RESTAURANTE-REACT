import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
      <span>Header</span>
      <nav>
      <span><Link to="/">Home</Link> </span>
        <span><Link to="/reserve">Reservar</Link> </span>
        <span><Link to="/reserves">Todas las reservas</Link> </span>
      </nav>
    </div>
  )
}

export default Header