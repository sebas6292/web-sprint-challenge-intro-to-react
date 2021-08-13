// Write your Character component here
import React from 'react';

import Characters from './character';

export default function Characters(props) {
    const { characters } = props

    return (
        <div className='contianer'> 

{ characters.map(character => 
<Character character={character} key={character.id}/>
            )}
        </div>
    )
}