import React from 'react';
import '../home/Modal.css'

const JModal1 = ({closeModal}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    Use a shopping cart 
                    to collect items from 
                    the shelves and check 
                    them off on your shopping 
                    list. Participate in a "Price Guessing" game, 
                    where you guess the price of different items 
                    in the store and learn about the value of money.
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal(false)}> Close </button>
        </div>
    )
}

export default JModal1;