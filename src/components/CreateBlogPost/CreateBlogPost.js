import { create } from '../../services/postService';
import AuthContext from '../../contexts/AuthContext';
import BlogPostForm from '../BlogPostForm';
import { useContext } from 'react';
import { buildFormDataFromJson } from '../../utils/helper';

const CreateBlogPost = () => {
    const { user } = useContext(AuthContext);

    const handleFormSubmission = (formData) => {
        formData.user_id = user.id

        create(buildFormDataFromJson(formData));
    }

    return (
        <BlogPostForm type='create' handleFormSubmission={handleFormSubmission} />
    );
}

export default CreateBlogPost;