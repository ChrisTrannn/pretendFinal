import React from 'react';
import '../home/Modal.css'

const MModal2 = ({closeModal2}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    Design and create a one of a kind 
                    boat using materials like cardboard, 
                    tin foil, foam, containers, bottles, 
                    and much more! Then fill a container, 
                    bathtub, or sink with water and sail off! 
                    For a challenge, you can use beans or beads 
                    to add weight to your boat(s) and see how much 
                    it can hold until it sinks!
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal2(false)}> Close </button>
        </div>
    )
}

export default MModal2;