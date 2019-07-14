import React from 'react';
import './Aside.css';
import ReactSwipe from 'react-swipe';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
const aside = () => {
    let reactSwipeEl;

    return (
      <div>
          
          <h6>Có thể bạn quan tâm</h6>
          <button onClick={() => reactSwipeEl.prev()}>L</button>
          <button onClick={() => reactSwipeEl.next()}>R</button>
        
        <ReactSwipe
          className="carousel py-2"
          swipeOptions={{ continuous: false }}
          ref={el => (reactSwipeEl = el)}
        >
       
            <img src={img1} alt='img1'/>
            <img src={img2} alt='img2'/>
            <img src={img3} alt='img3'/>
       
        </ReactSwipe>
       
      </div>
    );
    };

export default aside;