import React from 'react';
import Chat from '../Chat/Chat';
import { useChatContext } from '../../contexts/chatContext';

import './Chats.scss';

function Chats() {
	const { chats } = useChatContext();

	function sortChats() {
		return chats.map(chat => {
			return {
				...chat,
				messages: chat.messages.sort((a, b) => {
					return new Date(b.createdAt) - new Date(a.createdAt);
				})
			};
		}).sort((a, b) => {
			return new Date(b.messages[0].createdAt) - new Date(a.messages[0].createdAt);
		});
	}

	return (
		<div className='chats'>
			<p className='chats__heading'>Chats</p>
			{sortChats().map(chat => (
				<Chat key={chat.id} chat={chat}/>
			))}
		</div>
	);
}

export default Chats;
