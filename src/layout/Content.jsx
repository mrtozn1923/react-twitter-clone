import React, { useState } from 'react'
import { PopularIcon } from '../icons/icon';
import TweetBox from "../components/TweetBox";
import Divider from "../components/Divider";
import FeedList from "../components/FeedList";

const oldTweets = [{ displayName: "MertOZEN", username: "@mertozen", content: "ilk tweet", timestamp: "06.06.2022 16:18:40", avatar: "https://avatars.githubusercontent.com/u/24411661?v=4", image: "https://pbs.twimg.com/card_img/1530076678743015425/DvgoHLu_?format=png&name=medium" }, { displayName: "MertOZEN", username: "@mertozen", content: "ikinci tweet", timestamp: "06.06.2022 16:18:42", avatar: "https://avatars.githubusercontent.com/u/24411661?v=4", image: "https://pbs.twimg.com/card_img/1530076678743015425/DvgoHLu_?format=png&name=medium" }];

const Content = () => {
  const [tweets, setTweets] = useState(oldTweets);

  return (
    <main className='flex-1 flex-col border-r border-l border-gray-extraLight'>
      <header className='sticky top-0 flex justify-between  items-center p-4 border-b border-gray-extraLight bg-white z-10'>
        <span className='font-bold text-xl text-gray-900'>Home</span>
        <PopularIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className='flex space-x-4 px-4 py-3'>
        <img src='https://avatars.githubusercontent.com/u/24411661?v=4' alt='ProfilePhoto' className='w-11 h-11 rounded-full' />
        <TweetBox setTweets={setTweets} tweets={tweets} />
      </div>
      <Divider />

      <FeedList tweets={tweets} />
    </main>
  )
}

export default Content