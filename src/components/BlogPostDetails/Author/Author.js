const Author = () => {
    return (
        <div className="avatar__wrap text-center mt-100 mb-45">
            <div className="avatar-img">
                <img src="img/blog/comment/avatar.png" alt="" />
            </div>
            <div className="avatar__info">
                <h5>Rosalina William</h5>
                <div className="avatar__info-social">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-behance"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
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