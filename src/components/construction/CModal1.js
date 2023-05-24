import React from 'react';
import '../home/Modal.css'

const CModal1 = ({closeModal}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    Challenge your engineering 
                    skills by building a structure 
                    at least two feet tall using building 
                    blocks. Operate the crane to lift and 
                    position the blocks with precision, creating
                    a masterpiece that showcases your architectural prowess.
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal(false)}> Close </button>
        </div>
    )
}

export default CModal1;