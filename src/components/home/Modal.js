import React from 'react';
import './Modal.css'
import pretendMap from '../../assets/pretendMap.png'

const Modal = ({closeModal}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <img className='modalBtn' src={pretendMap}></img>
            </div>
            <button className='modalClose' onClick={() => closeModal(false)}> Close </button>
        </div>
    )
}

export default Modal;