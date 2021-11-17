import '../css/Button.css';
import React from 'react';

// Base design for all buttons. Button variations should be from here.
// Takes a label, an onClick action, and a Link if there's any
export const Button = ({label, action, link}) => {
    return(
        <button className='Button' onClick={action}>
            <a href={link}>{label}</a>
        </button>
    );
};
