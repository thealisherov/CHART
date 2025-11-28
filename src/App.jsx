import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

const App = () => {
  return <div className='w-full h-screen flex justify-between'>

    <Sidebar />

    <div className='flex-1 p-5'>
      <Outlet />
    </div>

  </div>
}

export default App