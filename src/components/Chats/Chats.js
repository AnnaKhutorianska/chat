import React from 'react';
import Chat from '../Chat/Chat';
import { useChatContext } from '../../contexts/chatContext';

import './Chats.scss';

function Chats() {
	const { chats, handleChangeChat } = useChatContext();

	return (
		<div className='chats'>
			<p className='chats__heading'>Chats</p>
			{chats.map(chat => (
				<Chat key={chat.id} chat={chat} changeChat={() => handleChangeChat(chat.id)} />
			))}
		</div>
	);
}

export default Chats;
