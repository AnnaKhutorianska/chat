export function sortChats(data) {
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