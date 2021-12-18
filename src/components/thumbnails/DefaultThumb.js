import { Link } from "react-router-dom";

const DefaultThumb = ({ coverImageUrl, url }) => {
    return (
        <Link to={url}>
            <div className="bsingle__post-thumb">
                <img src={coverImageUrl} alt="" />
            </div>
        </Link>
    );
}

export default DefaultThumb;