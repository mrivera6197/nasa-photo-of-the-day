import React from 'react'
import styled, { keyframes } from 'styled-components'
import "../App.css";

const StyledPhoto = styled.div `
    
    .dailyPhoto img {
        width: 70%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .main-title {
        text-align: start;
        margin: 5%;
        font-size: 1.5rem;
    }
    .photoInfo {
        margin: 5% 20% 5%;
        line-height: 1.6;
    }
`

const photoOfDay = ({photo}) => {
    console.log(photo.url)
    return (
    <StyledPhoto>
        <h1 className='main-title'>NASA Image of the Day</h1>
        <h2 className='subtitle'>{photo.title}</h2>
        <div> 
            <div className='dailyPhoto'>
                <img src={photo.url} alt={photo.explanation}/> 
            </div>
            <button className='button'>
                See Details
            </button> 
            <div className='photoInfo'> 
                    <p>{photo.explanation}</p>
                    <p>Photo date: {photo.date}</p>
                    <p>Copyright: {photo.copyright}</p>
            </div>
            
        </div>
    </StyledPhoto>
    )
}

export default photoOfDay