import React from 'react';
import '../home/Modal.css'

const MModal3 = ({closeModal3}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    Building boats offers kids a 
                    fun way to learn about buoyancy 
                    and displacement. By experimenting 
                    with different materials and shapes, 
                    they can discover what makes a boat float 
                    and move in water, fostering a hands-on understanding 
                    of these scientific concepts.
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal3(false)}> Close </button>
        </div>
    )
}

export default MModal3;