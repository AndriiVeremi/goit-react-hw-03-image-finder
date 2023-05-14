import React from 'react';
import PropTypes from 'prop-types';
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

ImageGalleryItem.protoType = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onImgClick: PropTypes.func.isRequired
};
