import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
        <nav className="sidebar">
          sidebar
        </nav>
        <main>
          <Outlet/>
        </main>
    </div>
  )
}

export default DashboardLayout