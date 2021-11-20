import Header from './Header';
import Content from './Content';

const BlogPostDetails = () => {
    return (
        <>
            <section className="breadcrumb-area d-flex align-items-center" style={{"background-image": "url(img/testimonial/test-bg.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="breadcrumb-wrap text-center">
                                <div className="breadcrumb-title mb-30">
                                    <h2>News Details</h2>
                                </div>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">News Details</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="inner-blog b-details-p pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-details-wrap">
                                <Header />
                                <Content />
                                <div className="posts_navigation pt-35 pb-35">
                                    <div className="row align-items-center">
                                        <div className="col-xl-4 col-md-5">
                                            <div className="prev-link">
                                                <span>Prev Post</span>
                                                <h4><a href="#">Tips on Minimalist</a></h4>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-md-2 text-left text-md-center">
                                            <a href="blog.html" className="blog-filter"><img src="img/icon/c_d01.png" alt="" /></a>
                                        </div>
                                        <div className="col-xl-4 col-md-5">
                                            <div className="next-link text-left text-md-right">
                                                <span>next Post</span>
                                                <h4><a href="#">Less Is More</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="avatar__wrap text-center mt-100 mb-45">
                                    <div className="avatar-img">
                                        <img src="img/blog/comment/avatar.png" alt="" />
                                    </div>
                                    <div className="avatar__info">
                                        <h5>Rosalina William</h5>
                                        <div className="avatar__info-social">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-behance"></i></a>
                                            <a href="#"><i className="fab fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                    <div className="avatar__wrap-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequa aute irure dolor.</p>
                                    </div>
                                </div>
                                <div className="comment__wrap pb-45 mb-45">
                                    <div className="comment__wrap-title">
                                        <h5>Comments</h5>
                                    </div>
                                    <div className="single__comment mb-35">
                                        <div className="comments-avatar">
                                            <img src="img/blog/comment/c_01.png" alt="" />
                                        </div>
                                        <div className="comment-text">
                                            <div className="avatar-name mb-15">
                                                <h6>ALina Kelian</h6>
                                                <span>19th May 2018</span>
                                                <a href="#" className="comment-reply"><i className="fas fa-reply"></i>Reply</a>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                    <div className="single__comment children mb-35">
                                        <div className="comments-avatar">
                                            <img src="img/blog/comment/c_02.png" alt="" />
                                        </div>
                                        <div className="comment-text">
                                            <div className="avatar-name mb-15">
                                                <h6>Rlex Kelian <i className="fas fa-bookmark"></i></h6>
                                                <span>19th May 2018</span>
                                                <a href="#" className="comment-reply"><i className="fas fa-reply"></i>Reply</a>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut
                                                aliquip commodo.</p>
                                        </div>
                                    </div>
                                    <div className="single__comment">
                                        <div className="comments-avatar">
                                            <img src="img/blog/comment/c_03.png" alt="" />
                                        </div>
                                        <div className="comment-text">
                                            <div className="avatar-name mb-15">
                                                <h6>Roboto Alex</h6>
                                                <span>21th May 2018</span>
                                                <a href="#" className="comment-reply"><i className="fas fa-reply"></i>Reply</a>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-comments-form mb-50">
                                    <div className="comment__wrap-title">
                                        <h5>Post Comment</h5>
                                    </div>
                                    <div className="comment-box">
                                        <form action="#" className="comment__form">
                                            <div className="comment-field text-area mb-20">
                                                <i className="fas fa-pencil-alt"></i>
                                                <textarea name="message" id="message" cols="30" rows="10"
                                                    placeholder="Type your comments...."></textarea>
                                            </div>
                                            <div className="comment-field mb-20">
                                                <i className="far fa-user"></i>
                                                <input type="text" placeholder="Type your name...." />
                                            </div>
                                            <div className="comment-field mb-20">
                                                <i className="fas fa-envelope"></i>
                                                <input type="email" placeholder="Type your email...." />
                                            </div>
                                            <div className="comment-field mb-20">
                                                <i className="fas fa-globe"></i>
                                                <input type="email" placeholder="Type your website...." />
                                            </div>
                                            <button className="btn">Post Comments</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <aside>
                                <div className="widget mb-40">
                                    <div className="widget-title text-center">
                                        <h4>Search</h4>
                                    </div>
                                    <div className="slidebar__form">
                                        <form action="#">
                                            <input type="text" placeholder="Search your keyword..." />
                                            <button><i className="fas fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="widget mb-40">
                                    <div className="widget-title text-center">
                                        <h4>Instagram</h4>
                                    </div>
                                    <ul className="widget-insta-post">
                                        <li><a href="#"><img src="img/blog/aside/insta_01.jpg" alt="img" /></a></li>
                                        <li><a href="#"><img src="img/blog/aside/insta_02.jpg" alt="img" /></a></li>
                                        <li><a href="#"><img src="img/blog/aside/insta_03.jpg" alt="img" /></a></li>
                                        <li><a href="#"><img src="img/blog/aside/insta_04.jpg" alt="img" /></a></li>
                                        <li><a href="#"><img src="img/blog/aside/insta_05.jpg" alt="img" /></a></li>
                                        <li><a href="#"><img src="img/blog/aside/insta_06.jpg" alt="img" /></a></li>
                                        <li><a href="#"><img src="img/blog/aside/insta_07.jpg" alt="img" /></a></li>
                                        <li><a href="#"><img src="img/blog/aside/insta_08.jpg" alt="img" /></a></li>
                                        <li><a href="#"><img src="img/blog/aside/insta_09.jpg" alt="img" /></a></li>
                                    </ul>
                                </div>
                                <div className="widget mb-40">
                                    <div className="widget-title text-center">
                                        <h4>Follow Us</h4>
                                    </div>
                                    <div className="widget-social text-center">
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-wordpress"></i></a>
                                    </div>
                                </div>
                                <div className="widget mb-40">
                                    <div className="widget-title text-center">
                                        <h4>Categories</h4>
                                    </div>
                                    <ul className="cat__list">
                                        <li><a href="#">Lifestyle <span>(05)</span></a></li>
                                        <li><a href="#">Travel <span>(34)</span></a></li>
                                        <li><a href="#">Fashion <span>(89)</span></a></li>
                                        <li><a href="#">Music <span>(92)</span></a></li>
                                        <li><a href="#">Branding <span>(56)</span></a></li>
                                    </ul>
                                </div>
                                <div className="widget mb-40">
                                    <div className="widget-title text-center">
                                        <h4>Feeds</h4>
                                    </div>
                                    <div className="widget__post">
                                        <ul>
                                            <li>
                                                <div className="widget__post-thumb">
                                                    <img src="img/blog/aside/post_01.jpg" alt="" />
                                                </div>
                                                <div className="widget__post-content">
                                                    <h6><a href="#">Alonso kelina falao asiano pero</a></h6>
                                                    <span><i className="far fa-clock"></i>1 Hours ago</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="widget__post-thumb">
                                                    <img src="img/blog/aside/post_02.jpg" alt="" />
                                                </div>
                                                <div className="widget__post-content">
                                                    <h6><a href="#">It is a long established fact that a reader</a></h6>
                                                    <span><i className="far fa-clock"></i>3 Hours ago</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="widget__post-thumb">
                                                    <img src="img/blog/aside/post_03.jpg" alt="" />
                                                </div>
                                                <div className="widget__post-content">
                                                    <h6><a href="#">Many desktop publish packages and web</a></h6>
                                                    <span><i className="far fa-clock"></i>5 Hours ago</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="widget__post-thumb">
                                                    <img src="img/blog/aside/post_04.jpg" alt="" />
                                                </div>
                                                <div className="widget__post-content">
                                                    <h6><a href="#">Various versions have evolved over the years</a></h6>
                                                    <span><i className="far fa-clock"></i>6 Hours ago</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="widget__post-thumb">
                                                    <img src="img/blog/aside/post_05.jpg" alt="" />
                                                </div>
                                                <div className="widget__post-content">
                                                    <h6><a href="#">Photo booth anim 8-bit PBR 3 wolf moon.</a></h6>
                                                    <span><i className="far fa-clock"></i>8 Hours ago</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget mb-40">
                                    <div className="widget-title text-center">
                                        <h4>Tags</h4>
                                    </div>
                                    <div className="widget__tag">
                                        <ul>
                                            <li><a href="#">Travel</a></li>
                                            <li><a href="#">Lifestyle</a></li>
                                            <li><a href="#">Photo</a></li>
                                            <li><a href="#">Adventures</a></li>
                                            <li><a href="#">Musician</a></li>
                                            <li><a href="#">08</a></li>
                                            <li><a href="#">Travel</a></li>
                                            <li><a href="#">Lifestyle</a></li>
                                            <li><a href="#">Photo</a></li>
                                            <li><a href="#">Adventures</a></li>
                                            <li><a href="#">Musician</a></li>
                                            <li><a href="#">08</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogPostDetails;