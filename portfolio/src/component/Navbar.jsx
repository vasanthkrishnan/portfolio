import React from 'react'
import '../assets/css/style.css'
import { Home, Search, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Resume from '../assets/pdf/Resume.pdf'

export const Navbar = () => {

  const handleResumeButton = () => {
    const link = document.createElement('a')
    link.href = Resume
    link.setAttribute('download', 'Resume.pdf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  const NavLinks = [ 
    {
      title:"Home",
      url:"./"
    },
    {
      title:"About",
      url:"./about"
    },
    {
      title: "Projects",
      url:"./projects"
    },
    {
      title:"Contact",
      url:"./contact"
    }
  ]
  return (
    <>
      <div className='w-full h-[10vh] bg-[#d1f2eb] shadow-md flex justify-center items-center'>
        <div className='w-[98%] h-[80%] flex justify-start items-center flex-row gap-[3.5rem]'>
          <div className='w-4/12 h-full flex justify-center items-center font-bold text-black text-4xl '><User className='w-10 h-10 text-red-500 font-bold' />Vasantha Krishnan S</div>
          <div className='w-3/12 h-full flex justify-center items-center'>
            <form className=' w-full h-full flex justify-center items-center flex-row search-form'>
            <input type="search" name="" id="" placeholder='Search Here ...' className='search'/>
            <Search className='w-7 h-7 search-icon' />
            </form>
          </div>
          <div className='w-4/12 h-full flex justify-center items-center'>
            <ul className='w-[90%] h-full flex justify-center items-center flex-row gap-5'>
              {
                NavLinks.map((navdata, index) => (
                  <NavLink key={index} to={navdata.url} className='border-b-4 border-transparent w-[5rem]'>
                      <li className='font-bold text-xl text-black h-full rounded-sm flex justify-center items-center'>{navdata.title}</li>
                  </NavLink>
              ))
              }
            </ul>
          </div>
          <div className='w-2/12 h-full flex justify-center items-center'>
            <button onClick={ handleResumeButton } className='px-4 py-2.5 rounded-md font-bold text-2xl bg-black text-white'>Download CV</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
