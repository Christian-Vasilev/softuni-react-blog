import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonBlogPost = () => {
    return (
        <div className="bsingle__post mb-50">
            <Skeleton width={555} height={498} />
            <div className="bsingle__content">
                <div className="meta-info">
                    <ul>
                        {Array(3).fill().map((item, index) => <li key={index}><Skeleton width={94} /></li> )}
                    </ul>
                </div>
                <h2><Skeleton /></h2>
            </div>
        </div>
    )
}

export default SkeletonBlogPost;

