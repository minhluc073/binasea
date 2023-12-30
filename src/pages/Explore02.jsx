import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/pagetitle/PageTitle';
import img1 from '../assets/images/img-banner-explore.png'
import img2 from '../assets/images/img-banner-live-auction-2.png'
import HotPick from '../components/hotpick/HotPick';
import dataHotpick from '../assets/fake-data/data-hotpick';

Explore02.propTypes = {
    
};

function Explore02(props) {
    return (
        <div className='page-explore'>
            <PageTitle sub='Explore' title='Explore Banner' />

            <section className="tf-baner-live-auction style-2">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-liver-auction-wrap">
                                <div className="content">
                                    <div className="heading">
                                        <h2 className="title">Big Boss #1238</h2>
                                        <span className="label">Coming soon</span>
                                    </div>
                                    <div className="price">
                                        <span className="icon"><i className="fab fa-ethereum"></i></span>
                                        <span>5 ETH</span>
                                    </div>
                                    <p className="sub-heading">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                                <div className="image">
                                    <img src={img1} alt="Binasea" className="img1" />
                                    <img src={img2} alt="Binasea" className="img2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <HotPick data={dataHotpick} />
            
        </div>
    );
}

export default Explore02;