import React from 'react';
import Card from './Card';
import './ListCard.css';

const listCard = (props) => {
  return (
    <div>
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
     
      <nav className="py-3 d-flex table-responsive">
        
        <ul className="py-8 mx-auto pagination pagination-lg" >
          <li className="page-item"><a className="page-link" href="/" >Previous</a></li>
          <li className="page-item"><a className="page-link" href="/">1</a></li>
          <li className="page-item"><a className="page-link" href="/">2</a></li>
          <li className="page-item"><a className="page-link" href="/">3</a></li>
          <li className="page-item"><a className="page-link" href="/">Next</a></li>
        </ul>
    
      </nav>
     





    </div>

  )
};


export default listCard;


