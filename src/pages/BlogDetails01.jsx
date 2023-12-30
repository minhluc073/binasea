import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/pagetitle/PageTitle';
import { Link } from 'react-router-dom';

import img1 from '../assets/images/blog/blog-details-1.jpg'
import img2 from '../assets/images/blog/blog-details-2.jpg'
import img3 from '../assets/images/blog/blog-details-3.jpg'
import img4 from '../assets/images/blog/blog-details-4.jpg'
import avt1 from '../assets/images/blog/author.jpg'

BlogDetails01.propTypes = {
    
};

function BlogDetails01(props) {
    return (
        <div>

            <PageTitle sub='Blog' title='Blog Details 1' />
            
            <section className="tf-blog-detail">
                <div className="tf-container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="detail-inner">
                                <div className="content-top">
                                    <h4 className="title">I Believe Everyone Can Be A Designer As Long They Love To Create Design</h4>
                                    <div className="author-infor">
                                        <div className="image">
                                            <img src={avt1} alt="Binasea" />
                                        </div>
                                        <span>by</span>
                                        <Link to="#">Binasea</Link>
                                        <span className="mr9">|</span>
                                        <span>August 13, 2022</span>

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
                                        <fieldset className="message"><textarea id="message" name="message" rows="4" placeholder="Message" tabindex="4" aria-required="true" required=""></textarea></fieldset>
                                        <div className="btn-submit"><button className="tf-button" type="submit">Send comment</button></div>
                                    </form>
                                </div>
                            </div>                        
                        </div>                                     
                    </div>
                </div>
            </section>
            
        </div>
    );
}

export default BlogDetails01;