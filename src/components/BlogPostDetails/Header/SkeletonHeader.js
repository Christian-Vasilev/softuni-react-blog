import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonHeader = () => {
    return (
        <>
            <Skeleton height={448} width={750} />
            <div className="meta__info">
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
        </>
    )
}

export default SkeletonHeader;

