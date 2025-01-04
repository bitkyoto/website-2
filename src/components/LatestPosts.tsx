import React from 'react'
import Post from './Post'
import post_cover_1 from '../assets/post1_cover.png'
export default function LatestPosts() {
  return (
        <>
            <div className='header_ mx-16 mb-10 items-center justify-between flex flex-wrap w-auto box-border'>
                <p className='text-6xl'>Latest episodes</p>
                <button className='bg-[#118DA8] w-44 h-14 rounded-[6px]'> View all episodes </button>
            </div>
            <div className="feed">
                <Post cover={post_cover_1} 
                      tags = {['Gear', 'Sports']}
                      episode = {3}
                      title = "Should you get outboard audio gear?"
                      description = "Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here's our reasons on why you might want to consider picking something up."
                />
            </div>
        </>
    )
}
