import React from 'react';
import './Crew.css';

function Crew({ crew }) {
  return (
    <section className='crew'>
      {crew.map((item, index) => {
        return (
          <div key={index} className='crew__person'>
            <img
              className='crew__img'
              src={
                item.person.image
                  ? item.person.image.medium
                  : 'https://placehold.jp/F9F9F9/b7b7b8/190x250.png?text=No%20image%0A(yet)'
              }
              alt={item.person.name}
            />
            <div className='crew__text'>
              <h2 className='crew__type'>{item.type}</h2>
              <h2 className='crew__name'>{item.person.name}</h2>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Crew;
