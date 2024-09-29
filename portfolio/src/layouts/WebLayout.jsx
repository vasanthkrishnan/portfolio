import React from 'react'
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'

export const WebLayout = () => {
  return (
    <>
        <div className='h-screen w-screen overflow-x-hidden'>
            <Navbar />

            <div className='h-[95vh] w-full flex flex-col justify-center items-center'>
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default WebLayout
