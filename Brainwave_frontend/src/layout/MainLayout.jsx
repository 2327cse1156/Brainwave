import Navbar from '@/components/Navbar'
import { Sidebar } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default MainLayout