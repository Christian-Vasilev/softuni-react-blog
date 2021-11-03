export default (props) => {
    return (
        <div className="bsingle__post-thumb embed-responsive embed-responsive-16by9">
            <iframe height="300" allow="autoplay"
                src={props.iframeSource}></iframe>
        </div>
    );
}