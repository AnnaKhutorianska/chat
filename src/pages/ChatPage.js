import Messages from '../components/Messages/Messages';
import Contacts from '../components/Contacts/Contacts';
import './ChatPage.scss';

function ChatPage() {
	return (
        <div className='chat-page'>
            <Contacts />
            <Messages />
        </div>
    );
}

export default ChatPage;
