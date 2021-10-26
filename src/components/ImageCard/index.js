import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Skeleton } from '../../components';

const Card = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 10px;
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
`;

const Title = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: #ffffff;
    font-size: 16px;
`;

const ImageCard = ({ photo, title }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoaded(true);
    }, [photo])

    return (
        <>
        {imageLoaded ? (
            <Card photo={photo}>
                <Title>{title}</Title>
            </Card>
        ) : (
            <Skeleton width="" height="" />
        )}
        </>
    )
} 

export default ImageCard;