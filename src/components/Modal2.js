import React from 'react';
import './Modal.css'

const Modal2 = ({closeModal2}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    Team Tap2Play is a UCI based team where our 
                    passion for merging technology and education led us
                    to win the competition at UCI's ANTrepreneur Center
                    for our project with the Pretend City Children Museum.
                    We were tasked with integrating technology throughout
                    the museum to enhance the learning experience for adult visitors.
                    We are proud to present Tap2Play, a mobile application that
                    allows parents to NFC tap their phones on signs throughout the museum.
                    The team consists of: Chris Tran, Joseph Saada, Rosalie Chen, and Isabella Cao.
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal2(false)}> Close </button>
        </div>
    )
}

export default Modal2;