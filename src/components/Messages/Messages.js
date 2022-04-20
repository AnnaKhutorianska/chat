import React from 'react';
import { useChatContext } from '../../contexts/chatContext';
import Message from '../Message/Message';
import UserImage from '../UserImage/UserImage';

import './Messages.scss';

function Messages() {
    const { currentChat } = useChatContext();
    const { username, imgSrc, messages } = currentChat;
    console.log(messages);

    return (
        <div className='chat-messages'>
            {!messages ?
                <p className='chat-messages__select'>select a chat to start messaging</p> :
                <>
                    <div className='chat-messages__user'>
                        <UserImage imgSrc={imgSrc} isOnline={true} />
                        <p>{username}</p>
                    </div>
                    <div className='chat-messages__all'>
                        {messages.map(({ id, message, createdAt, isCurrentUser }) => (
                            <Message
                                key={id}
                                message={message}
                                createdAt={createdAt}
                                imgSrc={imgSrc}
                                isCurrentUser={isCurrentUser}
                            />
                        ))}
                    </div>
                </>
            }
        </div>
    );
}

export default Messages;
