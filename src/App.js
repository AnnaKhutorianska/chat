import { ChatContextProvider } from './contexts/chatContext'; 
import ChatPage from './pages/ChatPage';

function App() {
	return (
		<ChatContextProvider>
			<ChatPage />
		</ChatContextProvider>
	);
}

export default App;
