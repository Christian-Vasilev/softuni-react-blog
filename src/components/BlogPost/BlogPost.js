import VideoThumb from "../thumbnails/VideoThumb";
import MusicThumb from "../thumbnails/MusicThumb";
import DefaultThumb from "../thumbnails/DefaultThumb";
import { Link } from "react-router-dom";
import { useParams, useRouteMatch } from "react-router";

const BlogPost = ({
    post: {
        id,
        title,
        slug,
        content,
        author,
        thumbnails,
        type,
        video_url,
        iframe_source,
        is_approved,
        created_at
    }
}) => {
    const { url } = useRouteMatch();
    const { urlId } = useParams();
    let blogPostThumb = null;

    switch (type) {
        case 'video':
            blogPostThumb = <VideoThumb
                videoUrl={video_url}
                coverImageUrl={thumbnails[0]}
            />
            break;
        case 'music':
            blogPostThumb = <MusicThumb
                iframeSource={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/547295505&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'}
                coverImageUrl={'img/blog/inner_b2.jpg'}
            />
            break;
        default:
            blogPostThumb = <DefaultThumb coverImageUrl={thumbnails[0]} />
            break;

    }

    return (
        <>
            <div className="bsingle__post mb-50">
                {blogPostThumb}
                <div className="bsingle__content">
                    <div className="meta-info">
                        <ul>
                            <li><i className="far fa-calendar-alt"></i>{created_at}</li>
                            <li><i className="far fa-user"></i>{author.name}</li>
                            <li><i className="far fa-comments"></i>35 Comments</li>
                        </ul>
                    </div>
                    <h2>{title}</h2>
                    <p>{content}</p>
                    <div className="slider-btn">
                        <Link to={`${slug}`} className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Read More</Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BlogPost;