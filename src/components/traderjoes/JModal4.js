import React from 'react';
import '../home/Modal.css'

const JModal4 = ({closeModal4}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    Did you know that the largest 
                    denomination of U.S. currency 
                    ever printed was the $100,000 bill? 
                    They were used for transactions between 
                    Federal Reserve Banks and were mainly 
                    used for internal accounting purposes. 
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal4(false)}> Close </button>
        </div>
    )
}

export default JModal4;