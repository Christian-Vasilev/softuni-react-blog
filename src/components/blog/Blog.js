import BlogPost from "../BlogPost";
import { useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import httpClient from "../../utils/httpClient";
import { useEffect } from "react";


const Blog = () => {
    const [posts, setPosts] = useState(null)
    const [hasError, setHasError] = useState(null)

    useEffect(() => {
        httpClient.get('/api/posts')
            .then(response => {
                setPosts(response.data.data);
            });
    }, [hasError]);

    const handlePostDelete = (slug) => {
        const confirmDelete = window.confirm('Delete this post?');

        setPosts([
            ...posts.filter((post) => {
                return post.slug !== slug
            })
        ]);

        if (confirmDelete) {
            httpClient.post(`/api/posts/${slug}`, {
                "_method": 'DELETE'
            }).then(response => {
                if (response.statusText != 'OK') {
                    setHasError('error');
                }
            });
        }
    }

    return (
        <>
            <Breadcrumb name="Blog posts" />
            <section className="inner-blog pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        {posts && (
                            posts.map((post, index) => (
                                <div className="col-lg-6">
                                    <BlogPost key={index} post={post} handlePostDelete={handlePostDelete} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;