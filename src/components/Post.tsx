import React from 'react'
export interface IPost{
  cover: string;
  tags: string[];
  episode: number;
  title: string;
  description: string;
}
export function Post(props: IPost) {
  return (
    <div className='post_container mx-16 mb-14 flex flex-wrap bg-black rounded-[2rem]'>
        <div className="left w-1/3 p-10 pr-12">
          <img className='h-full'src={props.cover} alt="" />
        </div>
        <div className='right flex flex-col w-2/3 pr-10 pt-10 pb-10 justify-evenly'>
          <div className="tags flex flex-wrap pr-20">
            {props.tags.map((tag, index) => 
                <div className="mb-10 mr-5 w-min py-2 px-4 bg-[#191919] rounded-md">
                  {tag}  
                </div>
              )}
          </div>
          
          <div className="episode text-[#118DA8] mb-10 text-xl">
            <p> Episode {props.episode}</p>
          </div>
          <div className="title">
            <h1 className='text-6xl pr-20 mb-10'> {props.title} </h1>
          </div>
          <div className="description text-2xl pr-20 mb-10 opacity-75">
            {props.description}
          </div>
          <button className='bg-[#118DA8] w-[12.5rem] h-14 rounded-[6px]'> View all episodes </button>
        </div>
    </div>
  )
}
