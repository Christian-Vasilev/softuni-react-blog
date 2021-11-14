import BlogPostVideoThumb from "./BlogPostVideoThumb";
import BlogPostMusicThumb from "./BlogPostMusicThumb";
import BlogPostNormal from "./BlogPostNormal";
import BlogPostCreate from "./BlogPostCreate";
import { Fragment } from "react";

export default (props) => {
    let blogPostThumb = null;

    switch (props.blogPostType) {
        case 'video':
            blogPostThumb = <BlogPostVideoThumb
                videoUrl={'https://www.youtube.com/watch?v=vKSA_idPZkc'}
                coverImageUrl={'img/blog/inner_b2.jpg'}
            />
            break;
        case 'music':
            blogPostThumb = <BlogPostMusicThumb
                iframeSource={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/547295505&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'}
                coverImageUrl={'img/blog/inner_b2.jpg'}
            />
            break;
        default:
            blogPostThumb = <BlogPostNormal coverImageUrl={'img/blog/inner_b2.jpg'} />
            break;

    }

    return (
        <Fragment>
            <BlogPostCreate />
            <div className="bsingle__post mb-50">
                {blogPostThumb}
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
        </Fragment>
        
    )
}