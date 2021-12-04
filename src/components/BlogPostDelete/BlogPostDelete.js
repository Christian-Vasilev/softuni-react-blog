import httpClient from "../../utils/httpClient";

const BlogPostDelete = ({ slug }) => {

    const handlePostDelete = () => {
        const confirmDelete = window.confirm('Delete this post?');

        if (confirmDelete) {
            httpClient.post(`/api/posts/${slug}`, {
                "_method": 'DELETE'
            }).then(response => {
                console.log(response);
            });
        }
    }

    return (
        <div className="slider-btn ml-1">
            <button className="btn ss-btn" onClick={() => handlePostDelete()} style={{'backgroundColor': '#fb2f2f'}} data-animation="fadeInRight" data-delay=".8s">
                Delete
            </button>
        </div>
    )
}

export default BlogPostDelete;