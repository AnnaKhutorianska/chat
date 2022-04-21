import { useChatContext } from '../../contexts/chatContext';

import './Notification.scss';

function Notification() {
    const { notification } = useChatContext();

    return notification.isShow && (
        <div className='notification'>
            {notification.message}
        </div>
    );
}

export default Notification;
