import React from 'react';
import '../home/Modal.css'

const BModal4 = ({closeModal4}) => {
    return (
        <div className='modal'>
            <div className='body'>

            </div>
            <button className='modalClose' onClick={() => closeModal4(false)}> Close </button>
        </div>
    )
}

export default BModal4;