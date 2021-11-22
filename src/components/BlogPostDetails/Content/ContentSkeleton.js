import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ContentSkeleton = () => {
    return (
        <div className="details__content pb-50">
        <Skeleton width={750} height={400} />
        <div className="row">
            <div className="col-xl-6 col-md-5 offset-lg-6">
                <div className="post__share text-right">
                    <h5>Social Share</h5>
                    <ul>
                        {Array(5)
                            .fill()
                            .map((item, index) => (
                                <li key={index}>
                                    <Skeleton height={26} width={26} />
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ContentSkeleton;