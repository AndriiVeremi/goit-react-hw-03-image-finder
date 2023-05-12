import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ searchFoto }) => (
    <ul >
        {searchFoto.map(({ id, webformatURL, largeImageURL }) => (
            <li key={id} className={css.image__item}>
                <img className={css.image} src={webformatURL} alt={largeImageURL} />
            </li>
        ))}
    </ul>
);

export default ImageGalleryItem;