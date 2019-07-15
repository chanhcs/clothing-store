import React from 'react';
import Phone from './phone.svg';
import Envelope from './envelope.svg';
import Instagram from './instagram.svg';
import Twitter from './twitter.svg';
import Youtube from './youtube.svg';
import Facebook from './facebook.svg';
import Adress from './adress.svg';
import './Footer.css';
const footer = () => {
    return (
        <div className="footer" style={{ background: '#292b2c', color: 'gray', fontSize: '14px' }}>
            <div className="container py-5 " >
                <div className="row ">
                    <div className="col-md-3 col-lg-3 ">

                        <h6> HỖ TRỢ KHÁCH HÀNG </h6>
                        <hr color='gray'></hr>
                        <div className="nav flex-column" >

                            <span>
                                <img style={{ width: '22px', height: '22px', marginRight: '5px', marginBottom: '2px' }} alt='Envelope' src={Phone} />
                                Hotline: 0378622863
                                </span>

                            <span>
                                <img style={{ width: '22px', height: '22px', marginRight: '5px', marginBottom: '2px' }} alt='Envelope' src={Envelope} />
                                Mail: pmchanhpk@gmail.com
                                </span>
                            <span>
                                <img style={{ width: '22px', height: '22px', marginRight: '5px', marginBottom: '2px' }} alt='Envelope' src={Adress} />
                                Địa chỉ: Gò Vấp - Hồ Chí Minh
                                </span>

                        </div>

                    </div>

                    <div className="col-md-3 col-lg-3">

                        <h6> THÔNG TIN MẶT HÀNG</h6>
                        <hr color='gray'></hr>
                        <div className="nav flex-column" >

                            <span>Thời trang nam</span>
                            <span>Thời trang nữ</span>
                            

                        </div>



                    </div>

                    <div className="col-md-3 col-lg-3">

                        <h6>LIÊN KẾT</h6>
                        <hr color='gray'></hr>
                        <div className="nav flex-column" >

                            <span>Tiki</span>
                            <span>Áo thun IT</span>


                        </div>



                    </div>
                    <div className="col-md-3 col-lg-3">

                        <h6>MẠNG XÃ HỘI</h6>
                        <hr color='gray'></hr>
                        <div className="container-fluid">
                            <a target="Blank" href="https://www.facebook.com/pmchanhpk" tabIndex="0" style={{ marginRight: '7px' }}>
                                <img style={{ width: '50px', height: '50px' }} alt='Envelope' src={Facebook} />
                            </a>
                            <a target="Blank" href="https://www.instagram.com/minhchanh0803" tabIndex="0" style={{ marginRight: '7px' }}>

                                <img style={{ width: '50px', height: '50px' }} alt='Envelope' src={Instagram} />
                            </a>
                            <a target="Blank" href="https://youtube.com" tabIndex="0" style={{ marginRight: '7px' }}>
                                <img style={{ width: '50px', height: '50px' }} alt='Envelope' src={Youtube} />
                            </a>

                            <a target="Blank" href="https://twitter.com" tabIndex="0" >

                                <img style={{ width: '50px', height: '50px' }} alt='Envelope' src={Twitter} />

                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default footer;