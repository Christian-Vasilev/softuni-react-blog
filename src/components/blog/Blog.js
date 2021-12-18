import BlogPost from "../BlogPost";
import { useContext, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { useEffect } from "react";
import { destroy, getAll } from "../../services/postService";
import AuthContext from "../../contexts/AuthContext";
import { displayNotification } from "../../utils/helper";
import SkeletonBlogPost from "../BlogPost/SkeletonBlogPost";

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [isPending, setIsPending] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        getAll().then(response => {
            setPosts(response.data);
            setIsPending(false);
        });
    }, []);


    const handlePostDelete = (slug) => {
        const confirmDelete = window.confirm('Delete this post?');

        setPosts([
            ...posts.filter((post) => {
                return post.slug !== slug
            })
        ]);

        if (confirmDelete) {
            destroy(slug, { user_id: user.id })
                .then(response => {
                    if (response.success) {
                        displayNotification(response.message);

                        return;
                    }

                    displayNotification(response.message);
                });
        }
    }

    return (
        <>
            <Breadcrumb name="Blog posts" />
            <section className="inner-blog pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        {!posts.length && !isPending && (
                            <div className="col-lg-12">
                                <div className="alrt alert-danger pt-20 pb-20 text-center white-color">
                                    <h1>There are no posts</h1>
                                </div>
                            </div>
                        )}
                        {!isPending ? (
                            posts.map((post, index) => (
                                <div key={index} className="col-lg-6">
                                    <BlogPost post={post} handlePostDelete={handlePostDelete} />
                                </div>
                            ))
                        ) : Array(5).fill().map((item, index) => (
                            <div key={index} className="col-lg-6">
                                <SkeletonBlogPost />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;