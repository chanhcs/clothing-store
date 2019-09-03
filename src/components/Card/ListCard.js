import React from 'react';
import Card from './Card';
import './ListCard.css';
import { Link } from 'react-router-dom';

const listCard = (props) => {
  return (
    <div>
      <div className="list">
        {
          props.listCard.map(card => {
            return (
              <Link style={{textDecoration: 'none'}} to={'/' + card.id} key={card.id}>
                <Card
                  name={card.name}
                  price={card.price}
                  img={card.img}
                />
              </Link>
            );
          })
        }
      </div>

    </div>

  )
};


export default listCard;


