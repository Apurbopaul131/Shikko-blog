/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import "./Bookmark.css";

const Bookmark = (props) => {
    const {title} = props.bookmark;
    return (
        <div className='bookmark-container'>
            <h3>{title}</h3>
        </div>
    );
};

export default Bookmark;