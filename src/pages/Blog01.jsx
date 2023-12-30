import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/pagetitle/PageTitle';
import data from '../assets/fake-data/data-blog'
import { Link } from 'react-router-dom';

Blog01.propTypes = {
    
};

function Blog01(props) {
    return (
        <div>

            <PageTitle sub='Blog' title='Blog 1' />


            <section className="tf-blog">
                <div className="tf-container">
                    <div className="row">
                        {
                            data.map(idx => (
                                <div key={idx.id} className="col-md-6">
                                    <article className="tf-blog-item">
                                        <div className="image">
                                            <Link to="/blog-details-v1"><img src={idx.img} alt="Binasea" /></Link>
                                        </div>
                                        
                                        <div className="title">
                                            <h5><Link to="/blog-details-v1">{idx.title}</Link></h5>
                                            <Link to="/blog-details-v1" className="tf-button style-1"><span>{idx.cate}</span></Link>
                                        </div>
                                        <p className="content">{idx.text}</p>
                                        
                                        <div className="meta">
                                            <span className="admin"> <i className="fal fa-user"></i> 
                                                {idx.user}
                                            </span>
                                            <span className="date"><i className="far fa-clock"></i>{idx.time}</span>
                                        </div>
                                    </article>
                                </div>  
                            ))
                        }
                        

                        <div className="col-md-12 ">
                            <div className="load-more">
                                <a className="tf-button loadmore" href="#">Load more</a>
                            </div>
                        </div>                 
                        
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Blog01;