import { Link } from "react-router-dom";

const Header = ({ author, created_at, image }) => {
    return (
        <>
            <div className="bsingle__post-thumb mb-30">
                <img src={image} alt="" />
            </div>
            <div className="meta__info">
                <ul>
                    <li><Link to='/'>  <i className="far fa-calendar-alt"></i>{created_at}</Link></li>
                    <li><Link to='/'><i className="far fa-user"></i>{author.name}</Link></li>
                    <li><i className="far fa-comments"></i>35 Comments</li>
                </ul>
            </div>
        </>
    )
}

export default Header;