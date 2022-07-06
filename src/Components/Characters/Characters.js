import React from 'react'
import './Characters.css'

function Characters({characters}) {
  return (
    characters.length > 0 ?
    <section className='characters'>
    {characters.map((item,index) => {
      return (
        <div key={index} className="characters__person">
          <img className='characters__img' src={item.character.image ? item.character.image.medium : 'https://placehold.jp/F9F9F9/b7b7b8/190x250.png?text=No%20image%0A(yet)'} alt='' />
          <div className="characters__text">
          <h2 className='characters__name'>{item.character.name}</h2>
          </div>
        </div>
      )
    })} 
  </section>
  : <h2>No characters info yet</h2>
  )
}

export default Characters