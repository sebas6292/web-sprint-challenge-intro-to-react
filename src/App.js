import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axos'

import characters from './components/Character'

export default const App = () => {
//   // Try to think through what state you'll need for this app before starting. Then build out
//   // the state properties here...
 const [characters, setCharacters] = useState({})

useEffect(() => {
  axios.get('https://swapi.dev/api/people')
    .then(res => {
      console.log(res);
      setCharacters(res.data)
    })
      .catch((err) => console.log(err))
}, [])

const getUpdateCharacters = () => {

  const updateCharacters = characters.map(character => {
    return character[i];
  });
}

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* <div>
        <Characters characters={getUpdateCharacters} />
      </div>
    </div> */}
    
  );
}

