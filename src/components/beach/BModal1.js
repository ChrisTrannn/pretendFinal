import React from 'react';
import '../home/Modal.css'

const BModal1 = ({closeModal}) => {
    return (
        <div className='modal'>
            <div className='body'>
                <div className='text'>
                    Grab a funnel and experience 
                    the wonder as you pour water over sand. 
                    Watch in awe as the water creates intricate 
                    patterns, shaping the sand into valleys and peaks. 
                    Explore the effects of speed and angle, becoming the
                    artist of this extraordinary sand art display. Discover 
                    the science of erosion and the fascinating power of nature 
                    to shape our world. Engage your senses and ignite your
                    creativity in this unforgettable journey into "Unleash 
                    the Magic Sand Art"!
                </div>
            </div>
            <button className='modalClose' onClick={() => closeModal(false)}> Close </button>
        </div>
    )
}

export default BModal1;