import React from 'react';
import '../home/Modal.css'

const BModal1 = ({closeModal}) => {
    return (
        <div className='modal'>
            <div className='body'>

            </div>
            <button className='modalClose' onClick={() => closeModal(false)}> Close </button>
        </div>
    )
}

export default BModal1;