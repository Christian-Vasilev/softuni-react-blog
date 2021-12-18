import { Link } from "react-router-dom";

const VideoThumb = ({ coverImageUrl, videoUrl }) => {
    return (
        <div className="bsingle__post-thumb video-p">
            <img src={coverImageUrl} alt="" />
            <Link target="_blank" to={{ pathname: `${videoUrl}` }} className="video-i popup-video">
                <i className="fas fa-play"></i>
            </Link>
        </div>
    );
}

export default VideoThumb;