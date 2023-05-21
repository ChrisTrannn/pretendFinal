import React from 'react';
import '../home/Modal.css'

const CModal3 = ({closeModal3}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal3(false)}> Close </button>
        </div>
    )
}

export default CModal3;