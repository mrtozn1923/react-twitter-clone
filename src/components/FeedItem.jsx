import React from 'react'
import { LikeIcon, ReplyIcon, ReTweetIcon, SharedIcon } from '../icons/icon'

const FeedItem = ({ avatar, content, displayName, image, timestamp, username }) => {
    return (
        <article className='flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer'>
            <img src={avatar} alt="Profile" className='w-11 h-11 rounded-full' />
            <div className='flex-1'>
                <div className='flex items-center text-sm'>
                    <h4 className='font-bold'>{displayName}</h4>
                    <span className='text-gray-dark ml-2'>{username}</span>
                    <div className='mx-2 bg-gray-dark h-1 w-1 border rounded-full'></div>
                    <span>{timestamp}</span>
                </div>
                <p className='mt-2 text-gray-900 text-sm'>{content}</p>
                {image && <img src={image} className="my-2 rounded-xl max-h-96" alt='tweetImage' />}
                <ul className='flex justify-between'>
                    <li className='flex items-center space-x-3 text-gray-dark text-sm group'>
                        <div className='flex items-center'>
                            <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light group-hover:text-primary-base'>
                                <ReplyIcon className="w-5 h-5" />
                            </div>
                            <span className='group-hover:text-primary-base'>4</span>
                        </div>
                    </li>
                    <li className='flex items-center space-x-3 text-gray-dark text-sm group'>
                        <div className='flex items-center'>
                            <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200 group-hover:text-green-400'>
                                <ReTweetIcon className="w-5 h-5" />
                            </div>
                            <span className='group-hover:text-green-400'>4</span>
                        </div>
                    </li>
                    <li className='flex items-center space-x-3 text-gray-dark text-sm group'>
                        <div className='flex items-center'>
                            <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200 group-hover:text-pink-400'>
                                <LikeIcon className="w-5 h-5" />
                            </div>
                            <span className='group-hover:text-pink-400'>4</span>
                        </div>

                    </li>
                    <li className='flex items-center space-x-3 text-gray-dark text-sm group'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light group-hover:text-primary-base'>
                            <SharedIcon className="w-5 h-5" />
                        </div>
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default FeedItem