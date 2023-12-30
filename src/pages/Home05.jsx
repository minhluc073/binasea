import React from 'react';
import PropTypes from 'prop-types';
import Banner05 from '../components/banner/Banner05';
import dataBanner from '../assets/fake-data/data-banner';
import LiveAutions5 from '../components/liveautions/LiveAutions5';
import dataLiveaution from '../assets/fake-data/data-liveaution';
import TopSeller5 from '../components/topseller/TopSeller5';
import dataSeller from '../assets/fake-data/data-topseller';
import Collection5 from '../components/collection/Collection5';
import dataCollection from '../assets/fake-data/data-collection';
import HotPick from '../components/hotpick/HotPick';
import dataHotpick from '../assets/fake-data/data-hotpick';
import Create5 from '../components/create/Create5';

Home05.propTypes = {
    
};

function Home05(props) {
    return (
        <div className="home-5">
            <div id='page'>
                <Banner05 data={dataBanner} />

                <LiveAutions5 data={dataLiveaution} />

                <TopSeller5 data={dataSeller} />

                <HotPick data={dataHotpick} />

                <Collection5 data={dataCollection} />

                <Create5 />
            </div>
        </div>
    );
}

export default Home05;