import React, { useState } from 'react'
import {EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon} from "../icons/icon"

const TweetBox = ({tweets,setTweets}) => {
    const [content,setContent]=useState("");

    const sendTweet=()=>{
        setTweets([{displayName:"MertOZEN",username:"mertozen",content:content,timestamp:new Date().toLocaleString("tr-TR"),avatar:"https://avatars.githubusercontent.com/u/24411661?v=4",image:""},...tweets])
    }

  return (
    <div className='flex flex-col flex-1 mt-2 px-2'>
        <textarea className='w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent' placeholder="What's happening?" onChange={e=>setContent(e.target.value)} value={content}/>
        <div className='flex items-center justify-between'>
            <div className='flex'>
                <div className='flex items-center justify-center w-11 h-11 hover:bg-primary-light rounded-full'>
                    <ImageIcon className="w-6 h-6 text-primary-base" />
                </div>
                <div className='flex items-center justify-center w-11 h-11 hover:bg-primary-light rounded-full'>
                    <GIFIcon className="w-6 h-6 text-primary-base" />
                </div>
                <div className='flex items-center justify-center w-11 h-11 hover:bg-primary-light rounded-full'>
                    <PollIcon className="w-6 h-6 text-primary-base" />
                </div>
                <div className='flex items-center justify-center w-11 h-11 hover:bg-primary-light rounded-full'>
                    <EmojiIcon className="w-6 h-6 text-primary-base" />
                </div>
                <div className='flex items-center justify-center w-11 h-11 hover:bg-primary-light rounded-full'>
                    <ScheduleIcon className="w-6 h-6 text-primary-base" />
                </div>
            </div>
            <button className='bg-primary-base text-white rounded-full px-4 py-2 font-medium' onClick={sendTweet}>Tweet</button>
        </div>
    </div>
  )
}

export default TweetBox