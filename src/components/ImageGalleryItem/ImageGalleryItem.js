import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item, imageClick }) => {
    const { largeImageURL, tags, webformatURL } = item;
    return (
        <li className={css.image__item} onClick={e => {
            e.preventDefault();
            imageClick({ largeImageURL, tags });
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