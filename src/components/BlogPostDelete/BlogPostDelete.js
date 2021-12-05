const BlogPostDelete = ({ slug, handlePostDelete }) => {
    return (
        <div className="slider-btn ml-1">
            <button className="btn ss-btn" onClick={() => handlePostDelete(slug)} style={{'backgroundColor': '#fb2f2f'}} data-animation="fadeInRight" data-delay=".8s">
                Delete
            </button>
        </div>
    )
}

export default BlogPostDelete;