import React from 'react'

export default function Footer() {
  return (
    <div className='my-12 mx-16 flex flex-wrap  bg-black rounded-[16px] py-10 px-20'>
        <div className="left w-1/2">
            <p className='text-[#118DA8] text-[1.25rem]'> Email Newsletter</p> 
            <p className= 'text-[6rem]'> Subscribe for updates</p> 
        </div>
        <div className="right inline w-1/2">
            <input className='w-full bg-[#191919] h-20 pl-6 mb-10' type="text" placeholder='Name'/>
            <input className='w-full bg-[#191919] h-20 pl-6 mb-10' type="text" placeholder='Email'/>
            <button className='bg-[#118DA8] w-20 h-12 rounded-[6px]'> Submit</button>
        </div>
    </div>
  )
}
