import React from 'react';
import marinaGIF from './marina.gif';
import backButton from '../../assets/backButton.png'
import pcCharacter from '../../assets/pcCharacter.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Marina.css';
import MModal1 from './MModal1';
import MModal2 from './MModal2';
import MModal3 from './MModal3';
import MModal4 from './MModal4';

const Marina = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route, { replace: true });
    };

    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [openModal4, setOpenModal4] = useState(false);

    return (
        <div>

            <div className='top'>
                <img src={backButton} onClick={() => handleClick('/home')} className='backButton'></img>
                <div className='topTitle'>Marina Zone</div>
                <img className='topCharacter' src={pcCharacter}></img>
            </div>

            <div className='imageDesc'>
                <img src={marinaGIF} className='gif'></img>
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
                {openModal && <MModal1 closeModal={setOpenModal}/>}
                {openModal2 && <MModal2 closeModal2={setOpenModal2}/>}
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
                {openModal3 && <MModal3 closeModal3={setOpenModal3}/>}
                {openModal4 && <MModal4 closeModal4={setOpenModal4}/>}
            </div>

            <div className='childLearn'>
                <div className='childLearnTitle'>
                    What Your Child Learned
                </div>
                <div className='childLearnDescription'>
                    Your child learned about buoyancy, water tension, and more!
                </div>
            </div>
        </div>
    )
}

export default Marina;