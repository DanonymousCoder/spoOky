import React from 'react';
import './popup.css';

function PopUp({showPopUp, hidePopUp, children}) {
    if (!showPopUp) {
        return null;
    }
    

    return (
        <div className='pop-up'>
            {children}
            <button onClick={hidePopUp}>Close</button>
        </div>
    );
};

export default PopUp;