import './Header.css'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header>
      <h1>Virtual Schedule</h1>

      <ul>
        <li><Link to='/login'>Iniciar Sesión</Link></li>
        <li><Link to='/register'>Registrarse</Link></li>
      </ul>
    </header>
  )
}
