import React from 'react';
import '../home/Modal.css'

const BModal3 = ({closeModal3}) => {
    return (
        <div className='modal'>
            <div className='body'>

            </div>
            <button className='modalClose' onClick={() => closeModal3(false)}> Close </button>
        </div>
    )
}

export default BModal3;