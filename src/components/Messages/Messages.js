import { useChatContext } from '../../contexts/chatContext';
import InputMessage from '../InputMessage/InputMessage';
import Message from '../Message/Message';
import UserImage from '../UserImage/UserImage';

import './Messages.scss';

function Messages() {
    const { chats, currentId } = useChatContext();
    const currentChat = chats.find(chat => chat.id === currentId);
    const { id, username, imgSrc, messages } = currentChat || {};

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
                    <InputMessage id={id}/>
                </>
            }
        </div>
    );
}

export default Messages;
