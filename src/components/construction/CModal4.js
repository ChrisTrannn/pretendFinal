import React from 'react';
import '../home/Modal.css'

const CModal4 = ({closeModal4}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    Did you know that The Great Wall of China,
                    one of the world's most renowned construction
                    projects, is so massive that it can be seen from space! 
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal4(false)}> Close </button>
        </div>
    )
}

export default CModal4;