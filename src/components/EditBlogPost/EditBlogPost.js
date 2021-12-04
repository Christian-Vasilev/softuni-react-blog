
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router-dom';
import BlogPostForm from '../BlogPostForm';
import httpClient from '../../utils/httpClient';

const EditBlogPost = () => {
    const { user } = useContext(AuthContext);
    const { slug } = useParams();
    const { data: { data: article }, isPending } = useAxios(`/api/posts/${slug}`);

    const handleFormSubmission = (formData) => {
        formData.append('_method', 'PATCH');
        console.log(Object.fromEntries(formData));

        httpClient.post(`/api/posts/${slug}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    }
    
    return (
        <>
            {!isPending && (
                <BlogPostForm article={article}
                    isPending={isPending}
                    user={user}
                    handleFormSubmission={handleFormSubmission} />
            )}
        </>
    );
}

export default EditBlogPost;