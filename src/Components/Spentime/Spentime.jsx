/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Spenttime.css";
const Spentime = (props) => {
    return (
        <div className='time-container'>
            <h3>Spent Time:{props.spentTime} minutes</h3>
        </div>
    );
};

export default Spentime;