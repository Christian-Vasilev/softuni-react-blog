import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const Content = ({ content }) => {
    return (
        <div className="details__content pb-50">
            <ReactMarkdown>{content}</ReactMarkdown>
            <div className="row">
                <div className="col-xl-6 col-md-5 offset-lg-6">
                    <div className="post__share text-right">
                        <h5>Social Share</h5>
                        <ul>
                            <li><Link to='/'><i className="fab fa-twitter"></i></Link></li>
                            <li><Link to='/'><i className="fab fa-pinterest-p"></i></Link></li>
                            <li><Link to='/'><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link to='/'><i className="fab fa-instagram"></i></Link></li>
                            <li><Link to='/'><i className="fab fa-gg"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;