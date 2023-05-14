import React from 'react';
import { Item, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ item, onImgClick }) => {
  const { largeImageURL, tags, webformatURL } = item;
  return (
    <Item
      onClick={e => {
        e.preventDefault();
        onImgClick({ largeImageURL, tags });
      }}
    >
      <Img src={webformatURL} alt={tags} loading="lazy" />
    </Item>
  );
};

export default ImageGalleryItem;
