import BlogPost from "../BlogPost";
import { useContext, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { useEffect } from "react";
import { getAll } from "../../services/postService";
import AuthContext from "../../contexts/AuthContext";

const Blog = () => {
    const [posts, setPosts] = useState(null)
    const { user } = useContext(AuthContext);

    useEffect(() => {
        getAll().then(response => {
            setPosts(response.data);
        });
    }, [user]);

    return (
        <>
            <Breadcrumb name="Blog posts" />
            <section className="inner-blog pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        {posts && (
                            posts.map((post, index) => (
                                <div key={index} className="col-lg-6">
                                    <BlogPost post={post} />
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