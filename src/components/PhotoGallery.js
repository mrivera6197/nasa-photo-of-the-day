import React from 'react'
import styled, { keyframes } from 'styled-components'
import "../App.css";

const StyledPhotoGallery = styled.div `
    img {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        width: 20%;
        margin: 5%;
        &:hover {
            transform: scale(1.2);
            transition: all 0.5s ease-in-out;
            box-shadow: 5px 5px 4px lightblue;
        }
        transition: all 0.5s ease-in-out;
    }
    .main-title {
        text-align: start;
        margin: 5%;
        font-size: 1.5rem;
    }
`

const roverImages = ({photoGallery}) => {
    return (
        <StyledPhotoGallery>
            <h2 className='main-title'>Mars Rover Images</h2>
            <div className='roverImages'>
                <img src={photoGallery[0]} /> 
                <img src={photoGallery[1]} />
                <img src={photoGallery[2]} />
                <img src={photoGallery[3]} />
                <img src={photoGallery[4]} />
                <img src={photoGallery[5]} />
                <img src={photoGallery[6]} />
                <img src={photoGallery[7]} />
                <img src={photoGallery[8]} />
                <img src={photoGallery[9]} />
                <img src={photoGallery[10]} />
            </div>
        </StyledPhotoGallery>
    )
}

export default roverImages