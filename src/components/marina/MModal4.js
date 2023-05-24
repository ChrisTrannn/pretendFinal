import React from 'react';
import '../home/Modal.css'

const MModal4 = ({closeModal4}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    Did you know that the world's largest 
                    cruise ship, Symphony of the Seas, is 
                    over 1,180 feet long - almost four football 
                    fields! It has incredible amenities like pools, 
                    water slides, theaters, and even a zip line. It's 
                    like a floating city on the water!
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal4(false)}> Close </button>
        </div>
    )
}

export default MModal4;