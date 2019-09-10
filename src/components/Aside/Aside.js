import React from 'react';
import './Aside.css';
import ReactSwipe from 'react-swipe';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import Messenger from './messenger.svg'
import ArrowLeft from './arrowLeft.svg';
import ArrowRight from './arrowRight.svg';

const aside = () => {
  let reactSwipeEl;

  return (
    <div className="aside">

      <h6>Có thể bạn quan tâm</h6>
      <button className="btn btn-danger" onClick={() => reactSwipeEl.prev()} style={{ marginRight: '5px' }}>
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
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Mua hàng
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Mua hàng</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <span>Để mua sản phẩm vui lòng liên hệ trực tiếp với</span>
              <div className="py-4">
                <button className="btn btn-primary">
                  <a target="Blank" href='https://m.me/pmchanhpk' tabIndex="0" style={{ textDecoration: 'none', color: 'white' }}>
                    <img src={Messenger} alt='Messenger' style={{ width: '30px', height: '50px' }} /> Phạm Minh Chánh
                </a>
                </button>
              </div>


            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default aside;