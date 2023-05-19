import React from 'react';
import {Route, Link, Routes, useNavigate} from 'react-router-dom';

const Marina = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route, { replace: true });
    };

    return (
        <div>
            <button onClick={() => handleClick('/home')}>Back</button>	
		    <p>Marina Page</p>
        </div>
    )
}

export default Marina;