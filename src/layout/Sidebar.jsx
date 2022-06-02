import React, { useState } from 'react'
import { HomeIcon,ExploreIcon,NotificationsIcon,MessagesIcon, BookmarkIcon,ListIcon,ProfileIcon,MoreIcon } from '../icons/icon';
import twitterLogo from "../images/twitter.svg";
import SideLink from '../components/SideLink';
import UserBox  from "../components/UserBox";

const sideLinks=[
  {
    name:'Home',
    icon:HomeIcon
  },
  {
    name:'Explore',
    icon:ExploreIcon
  },
  {
    name:'Notifications',
    icon:NotificationsIcon
  },
  {
    name:'Messages',
    icon:MessagesIcon
  },
  {
    name:'Bookmarks',
    icon:BookmarkIcon
  },
  {
    name:'Lists',
    icon:ListIcon
  },
  {
    name:'Profile',
    icon:ProfileIcon
  },
  {
    name:'More',
    icon:MoreIcon
  }
]

const Sidebar = () => {
  const [active,setActive]=useState("Home");
  
const handleMenuItemClick=(name)=>{
  setActive(name);
}

  return (
    <aside  className='w-72 flex flex-col justify-between px-2'>
      <div>
        <div className='mt-1 mb-4 ml-1 cursor-pointer flex items-center justify-center w-12 h-12 rounded-full hover:bg-blue-50'>
          <img src={twitterLogo} alt="Twitter Logo" className='w-9 h-9' />
        </div>
        <nav className='mb-4'>
          <ul>
            {sideLinks.map(({name,icon})=>(
              <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick}/>
            ))}
          </ul>
        </nav>
        <button className='bg-primary-base text-white rounded-full py-3 px-8 w-11/12 shadow-lg hover:bg-primary-dark transform transition-colors duration-200'>Tweet</button>
      </div>      
      <UserBox />
    </aside>
  )
}

export default Sidebar