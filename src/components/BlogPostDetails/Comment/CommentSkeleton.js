import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CommentSkeleton = () => {
    return (
        <>
            <div className="comments-avatar">
                <Skeleton width={100} height={100} />
            </div>
            <div className="comment-text">
                <div className="avatar-name mb-15">
                    <h6><Skeleton /></h6>
                    <span><Skeleton /></span>
                </div>
                <p><Skeleton width={620} height={75} /></p>
            </div>
        </>
    )
}

export default CommentSkeleton;