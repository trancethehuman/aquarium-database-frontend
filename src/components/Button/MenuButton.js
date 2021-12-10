import './MenuButton.css';
import React from 'react';

// Base design for all buttons. Button variations should be from here.
// Takes a label, an onClick action, and a Link if there's any
export const MenuButton = ({label, action, link}) => {

    return(
        <button className='MenuButton' onClick={action}>
            <a href={link}>{label}</a>
        </button>
    );
};
