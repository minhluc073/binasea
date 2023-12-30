import React from 'react';
import PropTypes from 'prop-types';
import Banner04 from '../components/banner/Banner04';
import dataBanner from '../assets/fake-data/data-banner';

import dataCollection from '../assets/fake-data/data-collection';
import TopSeller4 from '../components/topseller/TopSeller4';
import dataSeller from '../assets/fake-data/data-topseller';
import LiveAuction4 from '../components/liveautions/LiveAuction4';
import dataLiveaution from '../assets/fake-data/data-liveaution';
import Collection04 from '../components/collection/Collection04';
import Create4 from '../components/create/Create4';
import HotPick4 from '../components/hotpick/HotPick4';
import dataHotpick from '../assets/fake-data/data-hotpick';

Home04.propTypes = {
    
};

function Home04(props) {
    return (
        <div className='home-4'>
            <div id="page">
                <Banner04 data={dataBanner} />

                <TopSeller4 data={dataSeller} />

                <LiveAuction4 data={dataLiveaution} />


                <Collection04 data={dataCollection} />

                <Create4 />

                <HotPick4 data={dataHotpick} />
            </div>
        </div>
    );
}

export default Home04;