
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import BlogPostForm from '../BlogPostForm';
import { edit, show } from '../../services/postService';
import { buildFormDataFromJson } from '../../utils/helper';

const EditBlogPost = () => {
    const { user } = useContext(AuthContext);
    const [article, setArticle] = useState({});
    const [isPending, setIsPending] = useState(true);
    const { slug } = useParams();

    useEffect(() => {
        show(slug).then(response => {
            setArticle(response.data.data);
            setIsPending(false);
        });
    }, []);

    const handleFormSubmission = (formData) => {
        edit(slug, buildFormDataFromJson(formData, { user_id: user.id }))
            .then(response => console.log(response));
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