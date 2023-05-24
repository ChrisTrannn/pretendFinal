import React from 'react';
import beachGIF from './beach.gif';
import backButton from '../../assets/backButton.png'
import pcCharacter from '../../assets/pcCharacter.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Beach.css';
import BModal1 from './BModal1';
import BModal2 from './BModal2';
import BModal3 from './BModal3';
import BModal4 from './BModal4';

const Beach = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route, { replace: true });
    };

    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [openModal4, setOpenModal4] = useState(false);

    return (
        <div className='main'>

            <div className='top'>
                <img src={backButton} onClick={() => handleClick('/home')} className='backButton'></img>
                <div className='topTitle'>Beach Zone</div>
                <img className='topCharacter' src={pcCharacter}></img>
            </div>

            <div className='imageDesc'>
                <img src={beachGIF} className='gif'></img>
                <div className='imageDescription'>
                    Playing in the beach can help kids learn about
                    various science concepts such as erosion, gravity, 
                    and the properties of matter such as weight, texture, 
                    and density.
                </div>
            </div>

            <div className='learningObjectives'>
                <div className='learningObjectivesTitle'>
                    Learning Objectives
                </div>
                <div className='objectiveCards'>
                    <div className='objectiveCard' onClick={() => setOpenModal(true)}>
                        <div className='objectiveTitle'>
                            Museum Activities
                        </div>
                        <div className='objectiveDescription'>
                            Click to learn about a museum activity
                        </div>
                    </div>
                    <div className='objectiveCard' onClick={() => setOpenModal2(true)}>
                        <div className='objectiveTitle'>
                            At Home Activities
                        </div>
                        <div className='objectiveDescription'>
                            Click to learn about at home activities that involve
                            buoyancy, water tension, and more
                        </div>
                    </div>
                </div>
                {openModal && <BModal1 closeModal={setOpenModal}/>}
                {openModal2 && <BModal2 closeModal2={setOpenModal2}/>}
                <div className='objectiveCards objectiveCards2'>
                    <div className='objectiveCard' onClick={() => setOpenModal3(true)}>
                        <div className='objectiveTitle'>
                            Science Concepts
                        </div>
                        <div className='objectiveDescription'>
                            Click to learn more about how a boat floats on water
                        </div>
                    </div>
                    <div className='objectiveCard' onClick={() => setOpenModal4(true)}>
                        <div className='objectiveTitle'>
                            Fun Facts
                        </div>
                        <div className='objectiveDescription'>
                            Click to learn about fun facts!
                        </div>
                    </div>
                </div>
                {openModal3 && <BModal3 closeModal3={setOpenModal3}/>}
                {openModal4 && <BModal4 closeModal4={setOpenModal4}/>}
            </div>

            <div className='childLearn'>
                <div className='childLearnTitle'>
                    What Your Child Learned
                </div>
                <div className='childLearnDescription'>
                    Visitors will examine the behavior of 
                    the water interacting with the sand and 
                    observe how the sand will absorb/obtain the water.
                </div>
            </div>
        </div>
    )
}

export default Beach;