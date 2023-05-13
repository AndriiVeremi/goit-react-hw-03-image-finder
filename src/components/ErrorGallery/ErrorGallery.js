import React from 'react';
import error from '../../images/error.jpg';
import css from './ErrorGallery.module.css'

function ImageErrorView({ message }) {
    return (
        <div className={css.wrapper}>
            <p className={css.text}>{message}</p>
            <img src={error} width="500" alt="error" />           
        </div>
    );
}

export default ImageErrorView;
