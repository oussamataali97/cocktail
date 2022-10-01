import React from 'react'
import logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-gray-50 p-3 shadow-md '>
        <div className="contain max-w-7xl mx-auto flex justify-between items-center">

            <Link to='/' ><img src={logo} alt="" className='w-32 h-16' /></Link>
            <ul className='flex space-x-8 font-[500]'>
                <li><Link to='/' className='hover:text-blue-400'>Home </Link></li>
                <li><Link to='/about' className='hover:text-blue-400'>About </Link></li>

            </ul>
        </div>
        

    </div>
  )
}

export default Navbar