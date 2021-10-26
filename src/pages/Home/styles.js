import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.aside`
   background-color: ${(props) => props.theme.colors.background};
   width: 20vw;
   min-width: 360px;
   height: 100vh;
   overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    padding: 16px;
`;

export const Logo = styled.img`
    margin-bottom: 15px;
    width: 70%;
    align-self: center;
`;

export const MapWrapper = styled.div`
    width: 100%;
`;

export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
    align-self: start
`;

export const Carousel = styled(Slider)`
    .slick-slide {
        margin-right: 16px;
    }
`;

export const ModalTitle = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-family:${props => props.theme.fonts.regular};
    color: ${props => props.theme.colors.text};
    text-transform: none;
    line-height: 29px;
    font-size: 24px;
    font-weight: bold;
`;

export const ModalContent = styled(ModalTitle)`
    line-height: 19px;
    font-size: 16px;
    font-weight: normal;
`;