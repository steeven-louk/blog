import React from 'react'
import { Outlet } from 'react-router-dom'

import './styles/dashboard.scss'
import { Sidebar } from '../admin/components/sidebare'

const DashboardLayout = () => {
  return (
    <div className='admin_layout'>
      	    {/* ======================  left sidebar =======================  */}
              <Sidebar/>
      	    {/* ======================  End left sidebar =======================  */}

     
     <main>

          <Outlet/>
     </main>
       
    </div>
  )
}

export default DashboardLayout