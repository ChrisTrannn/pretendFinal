import React from 'react';
import {Route, Link, Routes, useNavigate} from 'react-router-dom';

const Beach = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route, { replace: true });
    };

    return (
        <div>
            <button onClick={() => handleClick('/home')}>Back</button>	
		    <p>Beach Page</p>
        </div>
    )
}

export default Beach;