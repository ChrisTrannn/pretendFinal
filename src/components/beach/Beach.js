import React from 'react';
import {Route, Link, Routes, useNavigate} from 'react-router-dom';
import './Beach.css';
import beachGIF from './beach.gif';

const Beach = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route, { replace: true });
    };

    return (
        <div className='beachBody'>
            <button onClick={() => handleClick('/home')}>Back</button>	

            <div className="heading"> Welcome to the Beach </div>

            <img className='picture' src={beachGIF}></img>

            <div className="description"> 
                <p> 
                    Playing in the beach can help kids learn about various 
                    science concepts such as erosion, gravity, and the 
                    properties of matter such as weight, texture, and density. 
                </p>
            </div>

            <div className="learning">
                <p> Learning Objectives </p>
            </div>

            <div className="row">
                <div className="column">
                    <div className="card">
                        <h3> Museum Activities </h3>
                        <p> Click to learn about a museum activity </p>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <div className="card">
                            <h3> At Home Activities </h3>
                            <p> 
                                Click to learn about at home activities that 
                                involve buoyancy, water tension, and more 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <div className="card">
                            <h3> Science Concepts </h3>
                            <p> Click to learn more about how a boat floats on water </p>
                        </div>
                    </div>
                        
                    <div className="column">
                        <div className="card">
                            <h3> Fun Facts! </h3>
                            <p> Click to learn about fun facts! </p>
                        </div>
                    </div>
                </div>
                
                <div className="learned">
                    <h3> What Your Child Learned </h3>
                    <p> What learned </p>
                </div>
            </div>

        </div>
    )
}

export default Beach;