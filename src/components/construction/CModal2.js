import React from 'react';
import '../home/Modal.css'

const CModal2 = ({closeModal2}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal2(false)}> Close </button>
        </div>
    )
}

export default CModal2;