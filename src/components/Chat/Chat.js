import React from 'react';
import UserImage from '../UserImage/UserImage';

import './Chat.scss';

const monthLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function Chat({ chat }) {
	const { username, imgSrc, messages } = chat;
	const { createdAt, message } = messages[0];

	function getFormatedDate() {
		const date = new Date(createdAt);
		const month = monthLabels[date.getMonth()];
		const day = date.getDate();
		const fullYear = date.getFullYear();

		return `${month} ${day}, ${fullYear}`;
	}

	return (
		<div className="chat">
			<div className="chat__info">
				<UserImage imgSrc={imgSrc} isOnline={true} />
				<div className="chat__info-details">
					<p className='chat__info-name'>{username}</p>
					<p className='chat__info-message'>{message}</p>
				</div>
			</div>
			<p className='chat__date'>{getFormatedDate()}</p>
		</div>
	);
}

export default Chat;
