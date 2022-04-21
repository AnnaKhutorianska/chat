import UserImage from '../UserImage/UserImage';
import InputSearch from '../InputSearch/InputSearch';

import './UserSearch.scss'

function UserSearch({ value, handleChange }) {
    return (
        <div className='user-search'>
            <UserImage isOnline={true}/>
            <InputSearch value={value} handleChange={handleChange} />
        </div>
    )
}

export default UserSearch;
