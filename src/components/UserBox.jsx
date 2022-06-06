import React from 'react'

const UserBox = () => {
  return (
    <div className='flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors'>
        <img src='https://avatars.githubusercontent.com/u/24411661?v=4' alt='ProfilePhoto' className='w-11 h-11 rounded-full' />

        <div className='flex flex-col'>
            <span className='font-bold text-md text-black'>Mert Özen</span>
            <span className='text-sm text-gray-dark'>@mertozen</span>
        </div>
        <div className='flex space-x-1'>
            <div className='w-1 h-1 bg-gray-900 rounded-full'></div>
            <div className='w-1 h-1 bg-gray-900 rounded-full'></div>
            <div className='w-1 h-1 bg-gray-900 rounded-full'></div>
        </div>
    </div>
  )
}

export default UserBox