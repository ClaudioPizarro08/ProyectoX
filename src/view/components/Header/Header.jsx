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

      <nav className='menu'>
        <ul className='menu__lista'>
          <li className='menu__item menu__item--activo'><Link to='/login'>Iniciar Sesión</Link></li>
          <li className='menu__item'><Link to='/register'>Registrarse</Link></li>
        </ul>
      </nav>
    </header>
  )
}
