import React from 'react';
import '../home/Modal.css'

const BModal2 = ({closeModal2}) => {
    return (
        <div className='modal'>
            <div className='body'>

            </div>
            <button className='modalClose' onClick={() => closeModal2(false)}> Close </button>
        </div>
    )
}

export default BModal2;