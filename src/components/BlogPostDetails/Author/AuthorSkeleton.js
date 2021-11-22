import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AuthorSkeleton = () => {
    return (
        <div className="avatar__wrap text-center mt-100 mb-45">
            <div className="avatar-img">
                <Skeleton height={120} width={120} />
            </div>
            <div className="avatar__info">
                <h5><Skeleton width={590} height={31} /></h5>
                <div className="avatar__info-social">
                    {Array(5)
                        .fill()
                        .map((item) => (
                            <a><Skeleton width={25} height={25} /></a>
                        ))}
                </div>
            </div>
            <div className="avatar__wrap-content">
                <p><Skeleton width={590} height={75} /></p>
            </div>
        </div>
    )
}

export default AuthorSkeleton;