import React, { useState, useEffect } from "react";
import "./App.css";


import axios from 'axios'
import Photo from './components/Photo'

function App() {

  const [photo, setPhoto] = useState([])

  useEffect (() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=ppwlJpfYFZ1kyC8OJGEheSBJECZYMTyxNuR793hl')
      .then(res => {
        setPhoto(res.data)
      })
      .catch(err => {
        debugger
      })
  }, [])

  return (
    <div className="App">
      <div className='App-header'> 
        <p>header</p>
      </div>
      <div> 
        <h1 className='main-title'>NASA Image of the Day</h1>
        <Photo photo={photo}/>
      </div>
    </div>
  );
}

export default App;
