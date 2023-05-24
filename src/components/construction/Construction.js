import React from 'react';
import backButton from '../../assets/backButton.png'
import pcCharacter from '../../assets/pcCharacter.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Construction.css';
import CModal1 from './CModal1';
import CModal2 from './CModal2';
import CModal3 from './CModal3';
import CModal4 from './CModal4';
import constructionGIF from './manof.gif';

const Construction = () => {
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
                <div className='topTitle'>Construction Zone</div>
                <img className='topCharacter' src={pcCharacter}></img>
            </div>

            <div className='imageDesc'>
                <img src={constructionGIF} className='gif'></img>
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
                {openModal && <CModal1 closeModal={setOpenModal}/>}
                {openModal2 && <CModal2 closeModal2={setOpenModal2}/>}
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
                {openModal3 && <CModal3 closeModal3={setOpenModal3}/>}
                {openModal4 && <CModal4 closeModal4={setOpenModal4}/>}
            </div>

            <div className='childLearn'>
                <div className='childLearnTitle'>
                    What Your Child Learned
                </div>
                <div className='childLearnDescription'>
                    Visitors develop spatial awareness, hand-eye
                    coordination, and problem-solving skills from
                    this activity. They learn about balance and
                    stability while exploring basic engineering 
                    concepts. This hands-on experience fosters creativity, 
                    fine motor skills, and an appreciation for construction 
                    and engineering.
                </div>
            </div>
        </div>
    )
}

export default Construction;