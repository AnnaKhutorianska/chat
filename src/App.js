import { ChatContextProvider } from './contexts/chatContext'; 
import ChatPage from './pages/ChatPage';
import Notification from './components/Notification/Notification';

function App() {
	return (
		<ChatContextProvider>
			<Notification />
			<ChatPage />
		</ChatContextProvider>
	);
}

export default App;
