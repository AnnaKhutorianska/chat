import { useContext, createContext, useState } from 'react';
import { nanoid } from 'nanoid';
import chatsData from '../data';
import { sortChats } from '../utils/helpers';
const ChatContext = createContext();

function prepareState() {
	const chats = localStorage.getItem('chats');

	const sortedChats = sortChats(chats ? JSON.parse(chats) : chatsData);

	localStorage.setItem('chats', JSON.stringify(sortedChats));

	return sortedChats;
}

const useChatContext = () => useContext(ChatContext);

function ChatContextProvider({ children }) {
	const [chats, setChats] = useState(prepareState());
	const [currentId, setCurrentId] = useState(null);
	const [notification, setNotification] = useState({});

	function showNotification(message) {
		setNotification({
			isShow: true,
			message
		});

		setTimeout(() => setNotification({}), 5000);
	}

	function addMessage(id, message, isCurrentUser = false) {
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

			if(isCurrentUser) showNotification(message);

			return updatedChats;
		});
	}

	function handleChangeChat(id) {
		setCurrentId(id);
	}

	return <ChatContext.Provider value={{ chats, addMessage, currentId, handleChangeChat, notification }}>{children}</ChatContext.Provider>;
}

export { ChatContextProvider, useChatContext };
