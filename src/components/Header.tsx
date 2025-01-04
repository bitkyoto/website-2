import React from 'react'
import logo from '../assets/logo.png'
export default function Header() {
  return (
    <header className='flex flew-wrap my-5 h-auto px-16 justify-between
    items-center'>
        <img className='py-4'src={logo} alt="" />
        <ul className='flex flex-wrap text-white text-base'>
            <li className='mr-10 hover:text-[#118DA8] cursor-pointer'>Home</li>
            <li className='mr-10 hover:text-[#118DA8] cursor-pointer'>Episodes</li>
            <li className='mr-10 hover:text-[#118DA8] cursor-pointer'>About</li>
            <li className='mr-10 hover:text-[#118DA8] cursor-pointer'>Contract</li>
        </ul>
    </header>
  )
}
