const VideoThumb = (props) => {
    return (
        <div className="bsingle__post-thumb video-p">
            <img src={props.coverImageUrl} alt="" />
            <a href={props.videoUrl} className="video-i popup-video">
                <i className="fas fa-play"></i>
            </a>
        </div>
    );
}

export default VideoThumb;