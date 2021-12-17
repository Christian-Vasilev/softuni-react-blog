import { create } from '../../services/postService';
import AuthContext from '../../contexts/AuthContext';
import BlogPostForm from '../BlogPostForm';
import { useContext } from 'react';
import { buildFormDataFromObj, displayNotification } from '../../utils/helper';
import { useHistory } from "react-router-dom";

const CreateBlogPost = () => {
    const { user } = useContext(AuthContext);
    const history = useHistory();

    const handleFormSubmission = (formData) => {
        formData.user_id = user.id

        create(buildFormDataFromObj(formData))
            .then(response => {
                if (response.success) {
                    displayNotification(response.message);
                    setTimeout(() => {
                        history.push('/')
                    }, 2000);

                    return;
                }
                
                displayNotification(response.message);
            });
    }

    return (
        <BlogPostForm type='create' handleFormSubmission={handleFormSubmission} />
    );
}

export default CreateBlogPost;