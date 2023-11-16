import { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { TaskContext } from '../../../context/task'

export const Header = () => {
  const { state, dispatch } = useContext(TaskContext)

  const Logout = () => {
    window.alert('Estás seguro que quieres cerrar sesión?')
    dispatch({ type: 'LOGOUT' })
  }

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
          {!state.user && <li className='menu__item menu__item--activo'><Link to='/login'>Iniciar Sesión</Link></li>}
          {!state.user && <li className='menu__item'><Link to='/register'>Registrarse</Link></li>}
          {state.user && <li><button className='logout' onClick={Logout}>Cerrar Sesión</button></li>}
        </ul>
      </nav>
    </header>
  )
}
