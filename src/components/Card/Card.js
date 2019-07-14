import React from 'react';
import './Card.css';

const card = (props) => {
    return (
       
        <div className="card mb-3">
            <img className="img-fluid" src={props.img} alt='clothes' />
            <div className="card-footer">
                <div>{props.name}</div>
                <div >{props.price}</div>
            </div>
            
        </div>
    );
}

export default card;