import React, { useState, useEffect } from "react";
import "./App.css";


import axios from 'axios'
import Photo from './components/Photo'
import PhotoGallery from './components/PhotoGallery'

function App() {

  const [photo, setPhoto] = useState([])
  const [photoGallery, setPhotoGallery] = useState([])
  const [currentPhoto, setCurrentPhoto] = useState('')

  const openDetails = id => {
    setCurrentPhoto(id)
  }

  const closeDetails = () => {
    setCurrentPhoto(null)
  }
 
  useEffect (() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ppwlJpfYFZ1kyC8OJGEheSBJECZYMTyxNuR793hl')
      .then(res => {
        setPhoto(res.data)
      })
      .catch(err => {
        debugger
      })
  }, [])

  useEffect (() => {
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=ppwlJpfYFZ1kyC8OJGEheSBJECZYMTyxNuR793hl')
      .then(res => {
        const photoArray = res.data.photos
        let roverArray = []
        photoArray.forEach(image => {
          roverArray.push(image.img_src)
        }, [])
        setPhotoGallery(roverArray)
      }, [])
      .catch(err => {
        debugger
      })
  }, [])

  return (
    <div className='App'>
      <div className='App-header'> 
        <p>header</p>
      </div>
      <div> 
        <Photo photo={photo}/>
      </div>
      <div className='photoGallery'>
        <PhotoGallery photoGallery={photoGallery} />
      </div>
    </div>
  );
}

export default App;
