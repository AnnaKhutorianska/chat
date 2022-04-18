import { useContext, createContext, useState } from 'react';
import { nanoid } from 'nanoid';
import chatsData from '../data';

const ChatContext = createContext();

function prepareState() {
	const chats = localStorage.getItem('chats');

	if (chats) return JSON.parse(chats);

	localStorage.setItem('chats', JSON.stringify(chatsData));

	return chatsData;
}

const useChatContext = () => useContext(ChatContext);

function ChatContextProvider({ children }) {
	const [chats, setChats] = useState(prepareState());

	function changeMessages(id, message, isCurrentUser = true) {
		setChats(prevChats => {
			const updatedChats = prevChats.map(chat => {
				if (chat.id !== id) return chat;

				return {
					...chat,
					messages: [
						...chat.messages,
						{
							id: nanoid(),
							message,
							createdAt: new Date(),
							isCurrentUser
						}
					]
				};
			});

			localStorage.setItem('chats', JSON.stringify(updatedChats));

			return updatedChats;
		});
	}

	return <ChatContext.Provider value={{ chats, changeMessages }}>{children}</ChatContext.Provider>;
}

export { ChatContextProvider, useChatContext };
