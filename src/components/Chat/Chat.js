import React from 'react'
import UserImage from '../UserImage/UserImage'

function Chat({chat}) {
  const {username, imgSrc, messages} = chat;
  console.log('not', messages);
  const sortedMessages = messages.sort((dateA, dateB) => {
    return new Date(dateB.createdAt) - new Date(dateA.createdAt)
  });
  console.log('sorted', sortedMessages);
  return (
    <div>
        <UserImage imgSrc={imgSrc} isOnline={true}/>
        <p>{username}</p>
        <p>message</p>
        <p>data</p>
    </div>
  )
}

export default Chat;
