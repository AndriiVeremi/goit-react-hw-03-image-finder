import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item, onImgClick }) => {
    const { largeImageURL, tags, webformatURL } = item;
    return (
        <li className={css.image__item} onClick={e => {
            e.preventDefault();
            onImgClick({ largeImageURL, tags });
        }}>
            <img
                className={css.image}
                src={webformatURL}
                alt={tags}
                loading="lazy"
            />
        </li>
    );
}; 

export default ImageGalleryItem;