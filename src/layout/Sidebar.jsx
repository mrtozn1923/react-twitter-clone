import React from 'react'
import { BookmarkIcon, ExploreIcon, HomeIcon, ListIcon, MessagesIcon, MoreIcon, NotificationsIcon, ProfileIcon } from '../icons/icon'


const Sidebar = () => {
  return (
    <aside  className='w-72 bg-blue-200 '>
      SideBar
      <HomeIcon />
      <ExploreIcon />
      <NotificationsIcon />
      <MessagesIcon />
      <BookmarkIcon />
      <ListIcon />
      <ProfileIcon />
      <MoreIcon />
    </aside>
  )
}

export default Sidebar