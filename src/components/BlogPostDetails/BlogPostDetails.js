import Header from './Header';
import Content from './Content';
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router';
import SkeletonHeader from './Header/SkeletonHeader';
import ContentSkeleton from './Content/ContentSkeleton';
import Author from './Author';
import AuthorSKeleton from './Author/AuthorSkeleton';
import CommentSkeleton from './Comment/CommentSkeleton';
import Comment from './Comment/Comment';
import Breadcrumb from '../Breadcrumb';

const BlogPostDetails = () => {
    const { slug } = useParams();
    const { data: { data: article }, isPending } = useAxios(`/api/posts/${slug}`);

    return (
        <>
            <Breadcrumb name={!isPending ? `${article.title}` : ''} />
            <section className="inner-blog b-details-p pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="blog-details-wrap">
                                {isPending
                                    ? <SkeletonHeader />
                                    : <Header author={article.author} image={article.thumbnails[0]} created_at={article.created_at} />}
                                {isPending
                                    ? <ContentSkeleton />
                                    : <Content content={article.content} />}
                                <div className="posts_navigation pt-35 pb-35"></div>
                                {isPending
                                    ? <AuthorSKeleton />
                                    : <Author author={article.author} />}
                                <div className="comment__wrap pb-45 mb-45">
                                    <div className="comment__wrap-title">
                                        <h5>Comments</h5>
                                    </div>
                                    <div className="single__comment mb-35">

                                        {isPending
                                            ? <CommentSkeleton />
                                            : <Comment />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    );
}

export default BlogPostDetails;