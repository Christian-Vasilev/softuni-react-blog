const MusicThumb = (props) => {
    return (
        <div className="bsingle__post-thumb embed-responsive embed-responsive-16by9">
            <iframe height="300" allow="autoplay" title="unique"
                src={props.iframeSource}></iframe>
        </div>
    );
}

export default MusicThumb;