import Chat from '../Chat/Chat';
import { useChatContext } from '../../contexts/chatContext';
import { sortChats } from '../../utils/helpers';

import './Chats.scss';

function Chats({ search }) {
	const { chats, handleChangeChat } = useChatContext();
	const sortedChats = sortChats(chats);
	const filteredChats = search ? sortedChats.filter(chat => chat.username.toLowerCase().includes(search.toLowerCase())) : sortedChats;

	return (
		<div className='chats'>
			<p className='chats__heading'>Chats</p>
			{filteredChats.map(chat => (
				<Chat key={chat.id} chat={chat} changeChat={() => handleChangeChat(chat.id)} />
			))}
		</div>
	);
}

export default Chats;
