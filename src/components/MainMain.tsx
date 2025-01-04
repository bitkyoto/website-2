import React from 'react'
import nigga from '../assets/nigga.png'
import spotify from '../assets/spotify.png'
import x from '../assets/x.png'
import soundcloud from '../assets/soundcloud.png'
import apple from '../assets/apple.png'
import y from '../assets/y.png'
export default function MainMainPage() {
  return (
    <div className="contain mx-16 items-center flex flex-wrap w-auto box-border">
        <div className="left w-1/2">
            <img src={nigga} alt="" />
        </div>
        <div className="right w-1/2  text-left">
            <p className='text-[120px] mb-16'>
                Take your <br/> podcast to the <br/> next level
            </p>
            <p>Listen on</p>
            <div className="logos flex flex-wrap mt-7">
                <img className='mr-4'src={spotify} alt="" />    
                <img className='mr-4'src={x} alt="" />    
                <img className='mr-4'src={soundcloud} alt="" />    
                <img className='mr-4'src={apple} alt="" />    
                <img className='mr-4'src={y} alt="" />    
            </div>
        </div>
        <div className='w-full h-10'></div>
    </div>
  )
}
