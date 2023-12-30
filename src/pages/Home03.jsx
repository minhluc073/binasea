import React from 'react';
import PropTypes from 'prop-types';
import dataCategory from '../assets/fake-data/data-category';
import TopSeller from '../components/topseller/TopSeller';
import dataSeller from '../assets/fake-data/data-topseller';

import dataCollection from '../assets/fake-data/data-collection';
import Banner03 from '../components/banner/Banner03';
import LiveAutions3 from '../components/liveautions/LiveAutions3';
import dataLiveaution from '../assets/fake-data/data-liveaution';
import Category from '../components/category/Category';
import Collection from '../components/collection/Collection';
import dataBanner2 from '../assets/fake-data/data-banner-2';
import Explore2 from '../components/explore/Explore2';
import dataExplore from '../assets/fake-data/data-explore';
import Create2 from '../components/create/Create2';

Home03.propTypes = {
    
};

function Home03(props) {
    return (
        <div className='home-3'>

            <div id="page">
                <Banner03 data={dataBanner2} />


                <Category data={dataCategory} />

                <LiveAutions3 data={dataLiveaution} />           

                <TopSeller data={dataSeller} />

                <Explore2 data={dataExplore} />

                <Collection data={dataCollection} />

                <Create2 />
            </div>
            
        </div>
    );
}

export default Home03;