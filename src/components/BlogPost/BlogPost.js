import VideoThumb from "../thumbnails/VideoThumb";
import MusicThumb from "../thumbnails/MusicThumb";
import DefaultThumb from "../thumbnails/DefaultThumb";
import ReactMarkdown from 'react-markdown';
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const BlogPost = ({
    post: {
        title,
        slug,
        author,
        thumbnails,
        type,
        video_url,
        iframe_source,
        created_at,
    },
    handlePostDelete
}) => {
    let blogPostThumb = null;
    const { user } = useContext(AuthContext);

    switch (type) {
        case 'video':
            blogPostThumb = <VideoThumb
                videoUrl={video_url}
                coverImageUrl={thumbnails[0]}
            />
            break;
        case 'music':
            blogPostThumb = <MusicThumb
                iframeSource={`https://w.soundcloud.com/player/?url=${iframe_source}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
                coverImageUrl={thumbnails[0]}
            />
            break;
        default:
            blogPostThumb = <DefaultThumb coverImageUrl={thumbnails[0]} />
            break;

    }

    return (
        <div className="bsingle__post mb-50">
            <Link to={`${slug}`}>{blogPostThumb}</Link>
            <div className="bsingle__content">
                <div className="meta-info">
                    <ul>
                        <li><i className="far fa-calendar-alt"></i>{created_at}</li>
                        <li><i className="far fa-user"></i>{author.name}</li>
                        <li><i className="far fa-comments"></i>35 Comments</li>
                    </ul>
                </div>
                <Link to={`${slug}`}><h2>{title}</h2></Link>
                {handlePostDelete && author.id === user.id || user?.is_admin
                    ? (
                        <>
                            <div className="slider-btn ml-1">
                                <Link to={`${slug}/edit`}
                                    className="btn ss-btn"
                                    data-animation="fadeInRight"
                                    data-delay=".8s">
                                    Edit
                                </Link>
                            </div>
                            <div className="slider-btn ml-1">
                                <button
                                    className="btn ss-btn"
                                    onClick={() => handlePostDelete(slug)} style={{ 'backgroundColor': '#fb2f2f' }}
                                    data-animation="fadeInRight"
                                    data-delay=".8s">
                                    Delete
                                </button>
                            </div>
                        </>
                    )
                    : null}
            </div>
        </div>
    )
}

export default BlogPost;