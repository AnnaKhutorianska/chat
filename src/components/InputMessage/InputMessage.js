import { useState } from 'react';
import { useChatContext } from '../../contexts/chatContext';
import sendIcon from '../../assets/images/sendIcon.png';

import './InputMessage.scss';

const URL = 'https://api.chucknorris.io/jokes/random';

function InputMessage({id}) {
    const { addMessage } = useChatContext();
    const [userInput, setUserInput] = useState('');

    function handleChange(event) {
        setUserInput(event.target.value)
    }

    function getReply() {
        fetch(URL)
            .then(response => response.json())
            .then(data => addMessage(id, data.value, true))
    }

    function handleSubmit(event) {
        event.preventDefault();
        addMessage(id, userInput);
        setUserInput('');
        setTimeout(getReply, 10000);
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='form__container'>
                <input
                    className='form__input'
                    placeholder='Type your message'
                    type='text'
                    onChange={handleChange}
                    value={userInput}
                />
                <button type = 'submit' className='form__btn'>
                    <img className='form__btn-img'src={sendIcon} alt='sendIcon'/>
                </button>
            </div>
        </form>
    )
}

export default InputMessage;
