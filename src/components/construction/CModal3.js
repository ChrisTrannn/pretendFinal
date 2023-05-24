import React from 'react';
import '../home/Modal.css'

const CModal3 = ({closeModal3}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    Building structures with 
                    blocks teaches kids about 
                    engineering, where they apply science
                    and math to create amazing things like 
                    buildings, bridges, and vehicles. It's a 
                    fun way to explore gravity, develop problem-solving 
                    skills, and unleash their creativity.
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal3(false)}> Close </button>
        </div>
    )
}

export default CModal3;