import React from 'react'
import host from '../assets/host.png'
import Footer from './Footer'
export default function AboutMain() {
  return (
    <>
    <div className="contain mx-16 mt-10 h-max items-center flex flex-wrap w-auto box-border">
        <div className="left w-1/2 h-full flex flex-wrap flex-col">
            <span className='bg-[#118DA8] w-32 h-32 mb-10 rounded-[400px] flex items-center justify-center'> 
                <p className='text-center text-7xl'> → </p>    
            </span>
            <p className='episode text-[#118DA8] mb-10 text-base pr-4'> Meet your host </p>
            <p className='text-7xl mb-10'>Jacob Paulaner</p>
            <p className='text-2xl opacity-70 mb-5'> Jacob has a background in audio engineering, and has been podcasting since the early days. </p>
            <p className='text-2xl opacity-70'> He’s here to help you level up your game by sharing everything he’s learned along the way. </p>

        </div>
        <div className="right w-1/2 h-full flex justify-end align-top">
            <img className='max-h-full max-w-full'src={host} alt="" />
        </div>
    </div>
    <Footer/>
    </>
  )
}
