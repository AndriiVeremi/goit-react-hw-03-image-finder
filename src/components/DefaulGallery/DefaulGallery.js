import React from 'react';
import search from '../../images/search.jpg';
import css from './DefaultGallery.module.css'

const DefaultGallery = ({ text }) => {
    return (
        <div className={css.wrapper}>
            <p className={css.text}>{text}</p>
            <img src={search} alt="search" />
        </div>
    );
};

export default DefaultGallery;