import React from 'react';
import search from '../../images/search.jpg';
import { Wrapper, Text, Img } from './DefaultGallery.styled';

const DefaultGallery = ({ text }) => {
    return (
        <Wrapper>
            <Text>{text}</Text>
            <Img src={search} width="350" alt="search" />
        </Wrapper>
    );
};

export default DefaultGallery;