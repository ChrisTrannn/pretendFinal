import React from 'react';
import '../home/Modal.css'

const BModal3 = ({closeModal3}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    Ocean waves and currents erode beach
                    sand and rocks over time. This erosion 
                    process is influenced by the saltier and
                    denser nature of ocean water, which also
                    makes it easier to float in compared to pool water.
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal3(false)}> Close </button>
        </div>
    )
}

export default BModal3;