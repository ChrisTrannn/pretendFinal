import React from 'react';
import '../home/Modal.css'

const JModal3 = ({closeModal3}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    Kids can learn about nutrition,
                    object recognition, counting, 
                    and math by exploring a simulated 
                    Trader Joe's store. They'll read nutritional 
                    labels, develop sensory skills, and engage with 
                    play money for math learning. This fun adventure 
                    combines education, imagination, and healthy choices 
                    into one exciting experience!
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal3(false)}> Close </button>
        </div>
    )
}

export default JModal3;