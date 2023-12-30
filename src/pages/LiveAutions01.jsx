import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/pagetitle/PageTitle';
import LiveAuction4 from '../components/liveautions/LiveAuction4';
import dataLiveaution from '../assets/fake-data/data-liveaution';

LiveAutions01.propTypes = {
    
};

function LiveAutions01(props) {
    return (
        <div className='page-liveauction'>
            <PageTitle sub='Explore' title='Live Auction' />

            <LiveAuction4 data={dataLiveaution} />
            
        </div>
    );
}

export default LiveAutions01;