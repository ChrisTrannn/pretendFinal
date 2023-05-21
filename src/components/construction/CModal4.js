import React from 'react';
import '../home/Modal.css'

const CModal4 = ({closeModal4}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal4(false)}> Close </button>
        </div>
    )
}

export default CModal4;