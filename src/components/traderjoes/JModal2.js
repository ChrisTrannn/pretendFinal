import React from 'react';
import '../home/Modal.css'

const JModal2 = ({closeModal2}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <iframe src='https://www.youtube.com/embed/EPGqrVBE2io'></iframe>
            </div>
            <button className='modalClose' onClick={() => closeModal2(false)}> Close </button>
        </div>
    )
}

export default JModal2;