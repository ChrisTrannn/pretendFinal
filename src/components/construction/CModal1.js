import React from 'react';
import '../home/Modal.css'

const CModal1 = ({closeModal}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal(false)}> Close </button>
        </div>
    )
}

export default CModal1;