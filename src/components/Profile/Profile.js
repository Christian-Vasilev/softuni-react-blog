import BlogPost from "../BlogPost";
import { useContext, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { useEffect } from "react";
import { getAllByUser, destroy } from "../../services/postService";
import AuthContext from "../../contexts/AuthContext";

const Profile = () => {
    const [posts, setPosts] = useState(null)
    const [hasError, setHasError] = useState(null)
    const { user } = useContext(AuthContext);

    useEffect(() => {
        getAllByUser()
            .then(response => {
                setPosts(response.posts);
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
            destroy(slug, { user_id: user.id }).then(response => {
                if (response.statusText != 'OK') {
                    setHasError('error');
                }
            });
        }
    }

    return (
        <>
            <Breadcrumb name={`${user.name} Profile`} />
            <section className="inner-blog pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        {posts && posts.length
                            ? (
                                posts.map((post, index) => (
                                    <div key={index} className="col-lg-6">
                                        <BlogPost post={post} handlePostDelete={handlePostDelete} />
                                    </div>
                                ))
                            )
                            : (<div className='alert alert-danger w-100 text-center'>You have no posts yet.</div>)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile;