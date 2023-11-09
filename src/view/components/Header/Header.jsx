import './Header.css'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header>
      <div href='#' className='logo'>
        <img
          src='list-check.png' alt='logo de la pagina'
          className='logo-img'
        />
        <h1 className='logo-nombre'>Virtual Schedule</h1>

      </div>

      <ul>
        <li className='nav-link'><Link to='/login'>Iniciar Sesión</Link></li>
        <li className='nav-link'><Link to='/register'>Registrarse</Link></li>
      </ul>

    </header>
  )
}
