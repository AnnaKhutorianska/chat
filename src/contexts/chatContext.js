import { useContext, createContext, useState } from 'react';
import { nanoid } from 'nanoid';
import chatsData from '../data';

const ChatContext = createContext();

function sortChats(data) {
	return data.map(chat => {
		return {
			...chat,
			messages: chat.messages.sort((a, b) => {
				return new Date(a.createdAt) - new Date(b.createdAt);
			})
		};
	}).sort((a, b) => {
		return new Date(b.messages[b.messages.length-1].createdAt) - new Date(a.messages[a.messages.length-1].createdAt);
	});
}

function prepareState() {
	const chats = localStorage.getItem('chats');

	const sortedChats = sortChats(chats ? JSON.parse(chats) : chatsData);

	localStorage.setItem('chats', JSON.stringify(sortedChats));

	return sortedChats;
}

const useChatContext = () => useContext(ChatContext);

function ChatContextProvider({ children }) {
	const [chats, setChats] = useState(prepareState());
	const [currentChat, setCurrentChat] = useState({});

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

	function handleChangeChat(id) {
		setCurrentChat(chats.find(chat => chat.id === id));
	}

	return <ChatContext.Provider value={{ chats, changeMessages, currentChat, handleChangeChat }}>{children}</ChatContext.Provider>;
}

export { ChatContextProvider, useChatContext };
