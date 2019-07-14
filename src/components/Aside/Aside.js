import React from 'react';
import './Aside.css';
import ReactSwipe from 'react-swipe';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import ArrowLeft from './arrowLeft.svg';
import ArrowRight from './arrowRight.svg';

const aside = () => {
  let reactSwipeEl;

  return (
    <div>

      <h6>Có thể bạn quan tâm</h6>
      <button className="btn btn-danger" onClick={() => reactSwipeEl.prev()} style={{ marginRight: '5px'}}>
        <img src={ArrowLeft} alt='arrowLeft' style={{ width: '20px', height: '20px' }} />
      </button>
      <button className="btn btn-danger" onClick={() => reactSwipeEl.next()}>
        <img src={ArrowRight} alt='arrowRight' style={{ width: '20px', height: '20px' }} />
      </button>

      <ReactSwipe
        className="carousel py-2"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >

        <img src={img1} alt='img1' />
        <img src={img2} alt='img2' />
        <img src={img3} alt='img3' />

      </ReactSwipe>
      <button className="btn btn-primary">Mua ngay</button>
     <hr></hr>
    </div>
  );
};

export default aside;