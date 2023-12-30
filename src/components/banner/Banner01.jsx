import React from 'react';
import PropTypes from 'prop-types';

import { Navigation, Scrollbar, A11y   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../../assets/images/slider/bg-slider.png'
import img2 from '../../assets/images/slider/slider-2.png'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './styles.scss'
import { Link } from 'react-router-dom';

Banner01.propTypes = {
    data : PropTypes.array,
};

function Banner01(props) {
    const {data} = props;
    
    return (
        <section className="tf-slider">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                        <Swiper
                            modules={[Navigation,  Scrollbar, A11y ]}
                            spaceBetween={0}
                            slidesPerView={1}
                            className="slider-home home1"
                            loop= {true}
                        >
                        {
                            data.slice(0,2).map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div className="tf-slider-item">
                                        <div className="content-inner">
                                            <h1 className="heading">
                                                Defind, Coll<span>ect</span> and Sell Sup<span>er</span> Rate NFT  
                                                <img src={img1} alt="Binasea" />  
                                            </h1>
                                            <p className="sub-heading">{idx.desc}</p>
                                            <div className="btn-slider ">
                                                <Link to="/explore-v2" className="tf-button style-2">Explore now</Link>
                                                <Link to="/create" className="tf-button style-3">Creat</Link>
                                            </div>
                                        </div>
                                        <div className="image">
                                            <div className="img-slider-main ani5"><img src={idx.img} alt="Binasea"/></div>
                                            <img src={img2} alt="Binasea" className="img-slider-2 ani4" />
                                            <img src={img2} alt="Binasea" className="img-slider-3 ani5" />
                                            
                                            <div className="current-bid ">
                                                <div className="title">Current bid</div>
                                                <div className="price">{idx.price}</div>
                                            </div>
                                            <div className="card-infor ani5">
                                                <img src={idx.avt} alt="Binasea" />
                                                <div className="inner ">
                                                    <h6 className="name">{idx.name}</h6>
                                                    <p className="author">{idx.tag}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                
                            ))
                        }
                    </Swiper>

                            
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Banner01;