import React from 'react';
import '../home/Modal.css'

const MModal1 = ({closeModal}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    Ahoy, co-captain! Join me 
                    on a thrilling boat-building 
                    adventure. Let's unleash our 
                    creativity and construct a 
                    magnificent boat!
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal(false)}> Close </button>
        </div>
    )
}

export default MModal1;