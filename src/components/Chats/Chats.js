import React from 'react';
import Chat from '../Chat/Chat';
import { useChatContext } from '../../contexts/chatContext';

function Chats() {
	const { chats } = useChatContext();
  console.log(chats);
	return (
		<div>
			<span>Chats</span>
			{chats.map(chat => (
        
				<Chat key={chat.id} chat={chat}/>
			))};
		</div>
	);
}

export default Chats;
