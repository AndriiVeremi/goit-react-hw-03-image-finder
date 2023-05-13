import React from 'react';
import error from '../../images/error.jpg';
import { Wrapper, Text, Img } from './ErrorGallery.styled';

function ImageErrorView({ message }) {
    return (
        <Wrapper>
            <Text>{message}</Text>
            <Img src={error} width="350" alt="error" />           
        </Wrapper>
    );
}

export default ImageErrorView;
