import VideoThumb from "./VideoThumb";
import MusicThumb from "./MusicThumb";
import DefaultThumb from "./DefaultThumb";
import BlogPostCreate from "./BlogPostCreate";

const BlogPost = (props) => {
    let blogPostThumb = null;

    switch (props.blogPostType) {
        case 'video':
            blogPostThumb = <VideoThumb
                videoUrl={'https://www.youtube.com/watch?v=vKSA_idPZkc'}
                coverImageUrl={'img/blog/inner_b2.jpg'}
            />
            break;
        case 'music':
            blogPostThumb = <MusicThumb
                iframeSource={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/547295505&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'}
                coverImageUrl={'img/blog/inner_b2.jpg'}
            />
            break;
        default:
            blogPostThumb = <DefaultThumb coverImageUrl={'img/blog/inner_b2.jpg'} />
            break;

    }

    return (
        <>
            <BlogPostCreate />
            <div className="bsingle__post mb-50">
                {blogPostThumb}
                <div className="bsingle__content">
                    <div className="meta-info">
                        <ul>
                            <li><i className="far fa-calendar-alt"></i> 7 March, 2019</li>
                            <li><i className="far fa-user"></i>by Zcube</li>
                            <li><i className="far fa-comments"></i>35 Comments</li>
                        </ul>
                    </div>
                    <h2>There are many variations passages of like consectetur lorem ipsum
                        available.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                        ut labore et
                        dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo
                        consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    <div className="slider-btn">
                        <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Read More</button>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default BlogPost;