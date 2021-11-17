import '../css/Button.css';
import React from 'react';

// Base design for all buttons. Button variations should be from here.
export const Button = ({label, action}) => {
    return(
        <button className='Button' onClick={action}>{label}</button>
    );
};
