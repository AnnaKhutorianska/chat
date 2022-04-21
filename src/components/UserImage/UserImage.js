import userImg from '../../assets/images/defaultImg.png';
import onlineMark from '../../assets/images/onlineMark.png'

import './UserImage.scss';

function UserImage({ imgSrc, isOnline }) {

    return (
        <div className='image'>
            <img className='image__user' src={imgSrc || userImg} alt='user image'/>
            {isOnline && <img className='image__online' src={onlineMark} alt='online mark'/>}
        </div>
    )
}

export default UserImage;
