import UserImage from '../UserImage/UserImage';

import './Message.scss';

function Message({ message, createdAt, isCurrentUser, imgSrc }) {
    function getFormatedDate() {
        const date = new Date(createdAt);
        const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        const month = date.getMonth();
        const day = date.getDate();
        const fullYear = date.getFullYear();

        return (`${month + 1}/${day}/${fullYear}, ${time}`);
    }

    return (
        <div className={`message ${!isCurrentUser && 'message--right'}`}>
                <div className='message__info'>
                    {isCurrentUser && <UserImage isOnline={false} imgSrc={imgSrc} />}
                    <div className='message__info-'>
                        <p className={`message__info-text ${isCurrentUser && 'message__info-text--current'}`}>{message}</p>
                        <p className={`message__info-date ${isCurrentUser && 'message__info-date--current'}`}>{getFormatedDate()}</p>
                    </div>
                </div>
            
        </div>
    );
}

export default Message;
