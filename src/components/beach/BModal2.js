import React from 'react';
import '../home/Modal.css'

const BModal2 = ({closeModal2}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <iframe src='https://www.youtube.com/embed/W4jbx5WLhy4'></iframe>
            </div>
            <button className='modalClose' onClick={() => closeModal2(false)}> Close </button>
        </div>
    )
}

export default BModal2;