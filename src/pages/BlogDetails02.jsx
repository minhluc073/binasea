import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import img1 from '../assets/images/blog/blog-details-5.jpg'
import img2 from '../assets/images/blog/blog-details-6.jpg'
import img3 from '../assets/images/blog/blog-details-7.jpg'
import img4 from '../assets/images/blog/blog-details-8.jpg'
import rs1 from '../assets/images/blog/recent-post-5.jpg'
import rs2 from '../assets/images/blog/recent-post-6.jpg'
import rs3 from '../assets/images/blog/recent-post-7.jpg'
import rs4 from '../assets/images/blog/recent-post-8.jpg'


BlogDetails02.propTypes = {
    
};

function BlogDetails02(props) {
    const [dataRecent] = useState([
        {
            id: 1,
            img: rs1,
            title: '6 Make Mobile Website Faster',
            text: 'Lorem ipsum dolor sit amer....'
        },
        {
            id: 2,
            img: rs2,
            title: '6 Make Mobile Website Faster',
            text: 'Lorem ipsum dolor sit amer....'
        },
        {
            id: 3,
            img: rs3,
            title: '6 Make Mobile Website Faster',
            text: 'Lorem ipsum dolor sit amer....'
        },
        {
            id: 4,
            img: rs4,
            title: '6 Make Mobile Website Faster',
            text: 'Lorem ipsum dolor sit amer....'
        },
    ])
    return (
        <div>

<section className="tf-page-title style-2">    
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">

                            <ul className="breadcrumbs">
                                <li><Link to="/blog-v2">Blog 2</Link></li>
                                <li>Blog Details 2</li>
                            </ul>
                   
                        </div>
                    </div>
                </div>                    
            </section>

            <section className="tf-blog">
                <div className="tf-container">
                   <div className="detail-wrap">
                        <div className="detail-inner">
                            <div className="content-top">
                                <h4 className="title">I Believe Everyone Can Be A Designer As Long They Love To Create Design</h4>
                                <div className="meta-blog">
                                    <div className="meta">
                                        <h6>DESIGNER INTERVIEW</h6>
                                        <p>AUGUST CHAPTER</p>
                                    </div>
                                    <div className="meta meta-right">
                                        <div className="meta-inner">
                                            <h6>WRITER</h6>
                                            <p>DWINAWAN</p>
                                        </div>
                                        <div className="meta-inner">
                                            <h6>DATE</h6>
                                            <p>AUGUST 11, 2021</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="image">
                                <img src={img1} alt="Binasea" />
                            </div>
                            <div className="content-inner">
                                <h6 className="title">What Is The Most Fun Thing To Become A Designer?</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Cupidatat non</p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                            <div className="image style-2">
                                <img className="mr20" src={img2} alt="Binasea" />
                                <img src={img3} alt="Binasea" />
                            </div>
                            <div className="content-inner">
                                <h6 className="title">How Is Your Daily Routine?</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Cupidatat non</p>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                            <div className="image">
                                <img src={img4} alt="Binasea" />
                            </div>
                            <div className="content-inner">
                                <h6 className="title">Middle Post Heading</h6>
                                <p>Middle Post Heading</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            </div>
                            <div className="content-bottom">
                                <div className="widget widget-socical">
                                    <h6 className="widget-title">Share:</h6>
                                    <ul>
                                        <li><Link to="#" className="icon-fl-mess"></Link></li>
                                        <li><Link to="#" className="icon-fl-coolicon"></Link></li>
                                        <li><Link to="#" className="icon-fl-facebook"></Link></li>
                                    </ul>
                                    
                                </div>
                                <div className="widget widget-tag">
                                    <h6 className="widget-title">Tags:</h6>
                                    <ul>
                                        <li><Link to="#" >Bitcoin,</Link></li>
                                        <li><Link to="#" >Token,</Link></li>
                                        <li><Link to="#" >Wallet</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div id="comments">
                                <h5 className="heading">Leave A Comment</h5>
                                <form action="contact/contact-process.php" method="post" id="commentform"  className="comment-form">
                                    <fieldset className="name"><input type="text" id="name" placeholder="Name" className="tb-my-input" name="name" tabindex="2" aria-required="true" required="" /></fieldset>    
                                    <fieldset className="email"><input type="email" id="email" placeholder="Email *" className="tb-my-input" name="email" tabindex="2" aria-required="true" required="" /></fieldset>
                                    <fieldset className="message"><textarea id="message" name="message" rows="4" placeholder="Message" tabindex="4" aria-required="true" required=""></textarea></fieldset><div className="btn-submit mg-t-36"><button className="tf-button" type="submit">Send comment</button></div></form></div>
                        </div> 
                        <div className="side-bar">
                            <div className="widget widget-recent-post">
                                <h6 className="widget-title">Recent Post</h6>
                                <ul>
                                    {
                                        dataRecent.map(idx=> (
                                            <li key={idx.id}>
                                                <div className="post-img">
                                                    <img src={idx.img} alt="Post New" />
                                                </div>
                                                <div className="post-content">
                                                    <h6 className="title"><Link to="/blog-details-v1">{idx.title} </Link></h6>
                                                    <div className="post-meta">
                                                        <span>{idx.text}</span>
                                                        <span>August 10, 2021</span>
                                                    </div>
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
            </section>
            
        </div>
    );
}

export default BlogDetails02;