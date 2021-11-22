import ReactMarkdown from 'react-markdown';

const Content = ({ content }) => {
    return (
        <div className="details__content pb-50">
            <ReactMarkdown>{content}</ReactMarkdown>
            <div className="row">
                <div className="col-xl-6 col-md-5 offset-lg-6">
                    <div className="post__share text-right">
                        <h5>Social Share</h5>
                        <ul>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fab fa-gg"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;