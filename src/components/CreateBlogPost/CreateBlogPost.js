import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import httpClient from '../../utils/httpClient';
import BlogPostForm from '../BlogPostForm';

const handleFormSubmission = (formData) => {
    httpClient.post('/api/posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
}

const CreateBlogPost = () => {
    const { user } = useContext(AuthContext);

    return (
        <BlogPostForm user={user} type='create' handleFormSubmission={handleFormSubmission} />
    );
}

export default CreateBlogPost;