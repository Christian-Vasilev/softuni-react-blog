import { Link } from "react-router-dom";

const Author = ({ author }) => {
    return (
        <div className="avatar__wrap text-center mt-100 mb-45">
            <div className="avatar-img">
                <img src="img/blog/comment/avatar.png" alt="" />
            </div>
            <div className="avatar__info">
                <h5>{author.name}</h5>
                <div className="avatar__info-social">
                    <Link to='/'><i className="fab fa-facebook-f"></i></Link>
                    <Link to='/'><i className="fab fa-twitter"></i></Link>
                    <Link to='/'><i className="fab fa-instagram"></i></Link>
                    <Link to='/'><i className="fab fa-behance"></i></Link>
                    <Link to='/'><i className="fab fa-linkedin"></i></Link>
                </div>
            </div>
            <div className="avatar__wrap-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequa aute irure dolor.</p>
            </div>
        </div>
    );
}

export default Author;