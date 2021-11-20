const Header = () => {
    return (
        <>
            <div className="bsingle__post-thumb mb-30">
                <img src="img/blog/inner_b1.jpg" alt="" />
            </div>
            <div className="meta__info">
                <ul>
                    <li><a href="#">  <i className="far fa-calendar-alt"></i>  7 March, 2019</a></li>
                    <li><a href="#"><i className="far fa-user"></i>by Zcube</a></li>
                    <li><i className="far fa-comments"></i>35 Comments</li>
                </ul>
            </div>
        </>
    )
}

export default Header;