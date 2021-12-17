
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import BlogPostForm from '../BlogPostForm';
import { edit, show } from '../../services/postService';
import { buildFormDataFromObj, displayNotification } from '../../utils/helper';

const EditBlogPost = () => {
    const { user } = useContext(AuthContext);
    const [article, setArticle] = useState({});
    const [isPending, setIsPending] = useState(true);
    const { slug } = useParams();

    useEffect(() => {
        show(slug).then(response => {
            setArticle(response.data);
            setIsPending(false);
        });
    }, [slug]);

    const handleFormSubmission = (formData) => {
        edit(slug, buildFormDataFromObj(formData, { user_id: user.id }))
            .then(response => {
                if (response.success) {
                    displayNotification(response.message);

                    return;
                }

                displayNotification(response.message);
            });
    }

    return (
        <>
            {!isPending && (
                <BlogPostForm article={article}
                    user={user}
                    handleFormSubmission={handleFormSubmission} />
            )}
        </>
    );
}

export default EditBlogPost;