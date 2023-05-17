import React from 'react';
import './Modal.css'

const Modal2 = ({closeModal2}) => {
    return (
        <div className='modal'>
            <div className='body'>
                
            </div>
            <button onClick={() => closeModal2(false)}> Close </button>
        </div>
    )
}

export default Modal2;