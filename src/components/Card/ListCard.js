import React from 'react';
import Card from './Card';
import './ListCard.css';

const listCard = (props) => {
  return (
    <div className="list">      
      {
        props.listCard.map(card => {
          return (
            <Card
              key={card.id}
              name={card.name}
              price={card.price}
              img={card.img}
            />
          );
        })
      }
      </div>
  )
};


export default listCard;


