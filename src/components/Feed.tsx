import React from 'react'
import { IPost, Post } from './Post'
interface FeedProps{
    posts: IPost[];
}
export default function Feed({posts} : FeedProps) {
  return (
        posts.map((post,index) => (<Post key={index} {...post}/>))
    )
}
