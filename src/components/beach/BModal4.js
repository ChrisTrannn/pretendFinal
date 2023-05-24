import React from 'react';
import '../home/Modal.css'

const BModal4 = ({closeModal4}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    Did you know that the beach
                    is not just composed of sand?
                    In addition to tiny grains of sand, 
                    the beach often contains a variety of
                    crushed seashells, volcanic remnants, 
                    coral fragments, and even tiny pieces of
                    colorful sea glass! 
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal4(false)}> Close </button>
        </div>
    )
}

export default BModal4;