const BlogPostCreate = (props) => {
    return (
        <div className="bsingle__post mb-50">
            <div className="bsingle__post-thumb video-p">
                <form className="box" method="post" action="">
                    <div className="file-area">
                        <input type="file" />
                        <div className="file-dummy">
                            <span className="default">Click to select a thumb for the article</span>
                            <img className="success" alt="success"/>
                        </div>
                    </div>
                </form>
                {/* Image upload form */}
                {/* VideoURL input */}
                {/* SpotifyURL input */}
            </div>
            <div className="bsingle__content">
                <div className="meta-info">
                    <ul>
                        <li><a href="#"> <i className="far fa-calendar-alt"></i> 7 March, 2019</a></li>
                        <li><a href="#"><i className="far fa-user"></i>by Zcube</a></li>
                        <li><i className="far fa-comments"></i>35 Comments</li>
                    </ul>
                </div>
                <h2><a href="blog-details.html">There are many variations passages of like consectetur lorem ipsum
                    available.</a></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et
                    dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo
                    consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                <div className="slider-btn">
                    <a href="#" className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default BlogPostCreate;