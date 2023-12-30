import React , {useState} from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/pagetitle/PageTitle';
import data from '../assets/fake-data/data-blog'
import { Link } from 'react-router-dom';
import img1 from '../assets/images/blog/recent-post-1.jpg'
import img2 from '../assets/images/blog/recent-post-2.jpg'
import img3 from '../assets/images/blog/recent-post-3.jpg'
import img4 from '../assets/images/blog/recent-post-4.jpg'

Blog02.propTypes = {
    
};

function Blog02(props) {

    const [dataRecent] = useState([
        {
            id: 1,
            img: img1,
            title: 'Best Corporate Tips You Will Read This Year.',
            cate: 'Music NFT’s'
        },
        {
            id: 2,
            img: img2,
            title: 'Should Fixing Corporate Take 100 Steps.',
            cate: 'Music NFT’s'
        },
        {
            id: 3,
            img: img3,
            title: 'The Next 100 Things To Immediately Do About',
            cate: 'Music NFT’s'
        },
        {
            id: 4,
            img: img4,
            title: 'Top 5 Lessons About Corporate To Learn',
            cate: 'Music NFT’s'
        },
    ])
    return (
        <div>

            <PageTitle sub='Blog' title='Blog 2' />

            <section className="tf-blog">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="main-content">
                                {
                                    data.slice(0,3).map(idx => (
                                        <article key={idx.id} className="tf-blog-item style-2">
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
                                    ))
                                }
                               
                                <div className="load-more style-2">
                                    <a className="tf-button loadmore" href="#">Load more</a>
                                </div>
                            </div>                        
                        </div>  
                        <div className="col-md-4">
                            <div className="side-bar">
                                <div className="widget widget-category">
                                    <h6 className="widget-title">Category</h6>
                                    <ul>
                                        <li><Link to="#">Music NFT’s</Link> <span>300</span></li>
                                        <li><Link to="#">NFT Creators</Link> <span>23</span></li>
                                        <li><Link to="#">Rare Products</Link> <span>12</span></li>
                                        <li><Link to="#">Rare Vedios</Link> <span>76</span></li>
                                        <li><Link to="#">Digital Arts</Link> <span>123</span></li>
                                        <li><Link to="#">App Music NFT’s</Link> <span>64</span></li>
                                        <li><Link to="#">Application</Link> <span>108</span></li>
                                        <li><Link to="#">Art</Link> <span>67</span></li>
                                    </ul>
                                </div>
                                <div className="widget widget-recent-post">
                                    <h6 className="widget-title">Recent Post</h6>
                                    <ul>
                                        {
                                            dataRecent.map(idx => (
                                                <li key={idx.id}>
                                                    <div className="post-img">
                                                        <img src={idx.img}
                                                         alt="Post New" />
                                                    </div>
                                                    <div className="post-content">
                                                        <h6 className="title"><Link to="/blog-details-v1">{idx.title}</Link></h6>
                                                        <Link to="/blog-details-v1" className="post-category">{idx.cate}</Link>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                       
                                    </ul>
                                </div>
                                <div className="widget widget-tag ">
                                    <h6 className="widget-title">Popular Tag</h6>
                                    <ul>
                                        <li><Link to="#">Bitcoin</Link></li>
                                        <li><Link to="#">NFT</Link></li>
                                        <li><Link to="#">Bids</Link></li>
                                        <li><Link to="#">Digital</Link></li>
                                        <li><Link to="#">Arts</Link></li>
                                        <li><Link to="#">Maketplace</Link></li>
                                        <li><Link to="#">Token</Link></li>
                                        <li><Link to="#">Wallet</Link></li>
                                        <li><Link to="#">Crypto</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>                                     
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default Blog02;