const Footer = () => {
    return (
        <footer className="footer-bg footer-p pt-90">
            <div className="footer-top-heiding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <h2> Subscribe To Our Newsletter For Latest Updates</h2>

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="newslater-area">
                                <form name="ajax-form" id="contact-form4" action="#" method="post" className="contact-form newslater">
                                    <div className="form-group">
                                        <input className="form-control" id="email2" name="email" type="email" placeholder="Email Address..."
                                            defaultValue="" required="" />
                                        <button type="submit" className="btn btn-custom" id="send2">Subscribe <i
                                            className="fas fa-chevron-right"></i></button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="footer-top pb-50">
                <div className="container">
                    <div className="row justify-content-between">

                        <div className="col-xl-3 col-lg-3 col-sm-6">

                            <div className="footer-widget mb-30">
                                <div className="flog mb-35">
                                    <img src="img/logo/w_logo.png" alt="logo" />
                                </div>
                                <div className="f-contact">
                                    <ul>
                                        <li>
                                            <i className="icon far fa-clock"></i>
                                            <span>1800-121-3637<p>+91 555 234-8765</p></span>
                                        </li>
                                        <li>
                                            <i className="icon dripicons-mail"></i>
                                            <span>info@example.com<br />sale @example.com</span>
                                        </li>

                                    </ul>

                                </div>
                            </div>


                        </div>
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h5>Our Links</h5>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        <li><i className="fas fa-chevron-right"></i> Partners</li>
                                        <li><i className="fas fa-chevron-right"></i> About Us</li>
                                        <li><i className="fas fa-chevron-right"></i> Career</li>
                                        <li><i className="fas fa-chevron-right"></i> Reviews</li>
                                        <li><i className="fas fa-chevron-right"></i> Terms & Conditions</li>
                                        <li><i className="fas fa-chevron-right"></i> Help</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="f-widget-title">
                                    <h5>Other Links</h5>
                                </div>
                                <div className="footer-link">
                                    <ul>
                                        <li><i className="fas fa-chevron-right"></i> Home</li>
                                        <li><i className="fas fa-chevron-right"></i> About Us</li>
                                        <li><i className="fas fa-chevron-right"></i> Services</li>
                                        <li><i className="fas fa-chevron-right"></i> Project</li>
                                        <li><i className="fas fa-chevron-right"></i> Our Team</li>
                                        <li><i className="fas fa-chevron-right"></i> Latest Blog</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-sm-6">
                            <div className="footer-widget mb-30">
                                <div className="footer-text mb-20">
                                    <p>Fusce orci ligula, tincidunt ut metus vel, venenatis aliquet tortor. Duis et consequat enim.
                                        Curabitur pulvinar, dolor at pulvinar molestie, augue massa volutpat felis, at rhoncus tortor
                                        velit vel diam. Cras ac suscipit metus. Cras vitae quam eget risus efficitur malesuada. Praesent
                                        condimentum lacus nisi, eu venenatis purus eleifend sit amet. Vivamus ac enim vitae erat
                                        scelerisque ullamcorper. Ut id pretium sem. Proin ac consectetur orci.</p>
                                </div>
                                <div className="footer-social">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab fa-google-plus-g"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-12">
                            &copy; 2020 Hitup All design Zcube.
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer