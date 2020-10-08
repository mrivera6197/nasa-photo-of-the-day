import React from 'react'

const photoOfDay = ({photo}) => {
    console.log(photo.url)
    return (
    <div>
        <h2 className='subtitle'>{photo.title}</h2>
        <div> 
            <div className='dailyPhoto'>
                <img src={photo.url} alt={photo.explanation}/> 
            </div>
            <div className='photoInfo'> 
                <p>{photo.explanation}</p>
                <p>Photo date: {photo.date}</p>
                <p>Copyright: {photo.copyright}</p>
            </div>
        </div>
    </div>
    )
}

export default photoOfDay