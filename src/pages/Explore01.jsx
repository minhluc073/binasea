import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/pagetitle/PageTitle';
import HotPick from '../components/hotpick/HotPick';
import dataHotpick from '../assets/fake-data/data-hotpick';

Explore01.propTypes = {
    
};

function Explore01(props) {
    return (
        <div className='page-explore'>
            <PageTitle sub='Explore' title='Explore Grid' />

            <HotPick data={dataHotpick} />
            
        </div>
    );
}

export default Explore01;