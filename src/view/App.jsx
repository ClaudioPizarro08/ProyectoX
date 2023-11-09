import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { DashboardPage } from './pages/DashboardPage'
import { useState } from 'react'

function App () {
  const [user, setUser] = useState([])

  return (
    <div className='App'>
      {
        !user.length > 0
          ? <RouterProvider router={router} setUser={setUser} />
          : <DashboardPage user={user} setUser={setUser} />
      }

    </div>
  )
}

export default App
