import BlogPost from "./BlogPost"

export default () => {
  return (
    <main>
      <section className="breadcrumb-area d-flex align-items-center"
        style={{ backgroundImage: 'url(img/testimonial/test-bg.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="breadcrumb-wrap text-center">
                <div className="breadcrumb-title mb-30">
                  <h2>News Feeds</h2>
                </div>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">News</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="inner-blog pt-100 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <BlogPost blogPostType={'music'} />
              <div className="pagination-wrap mb-50">
                <nav>
                  <ul className="pagination">
                    <li className="page-item"><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
                    <li className="page-item active"><a href="#">1</a></li>
                    <li className="page-item"><a href="#">2</a></li>
                    <li className="page-item"><a href="#">3</a></li>
                    <li className="page-item"><a href="#">...</a></li>
                    <li className="page-item"><a href="#">10</a></li>
                    <li className="page-item"><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <aside>
                <div className="widget mb-40">
                  <div className="widget-title text-center">
                    <h4>Search</h4>
                  </div>
                  <div className="slidebar__form">
                    <form action="#">
                      <input type="text" placeholder="Search your keyword..." />
                      <button><i className="fas fa-search"></i></button>
                    </form>
                  </div>
                </div>
                <div className="widget mb-40">
                  <div className="widget-title text-center">
                    <h4>Instagram</h4>
                  </div>
                  <ul className="widget-insta-post">
                    <li><a href="#"><img src="img/blog/aside/insta_01.jpg" alt="img" /></a></li>
                    <li><a href="#"><img src="img/blog/aside/insta_02.jpg" alt="img" /></a></li>
                    <li><a href="#"><img src="img/blog/aside/insta_03.jpg" alt="img" /></a></li>
                    <li><a href="#"><img src="img/blog/aside/insta_04.jpg" alt="img" /></a></li>
                    <li><a href="#"><img src="img/blog/aside/insta_05.jpg" alt="img" /></a></li>
                    <li><a href="#"><img src="img/blog/aside/insta_06.jpg" alt="img" /></a></li>
                    <li><a href="#"><img src="img/blog/aside/insta_07.jpg" alt="img" /></a></li>
                    <li><a href="#"><img src="img/blog/aside/insta_08.jpg" alt="img" /></a></li>
                    <li><a href="#"><img src="img/blog/aside/insta_09.jpg" alt="img" /></a></li>
                  </ul>
                </div>
                <div className="widget mb-40">
                  <div className="widget-title text-center">
                    <h4>Follow Us</h4>
                  </div>
                  <div className="widget-social text-center">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-wordpress"></i></a>
                  </div>
                </div>
                <div className="widget mb-40">
                  <div className="widget-title text-center">
                    <h4>Categories</h4>
                  </div>
                  <ul className="cat__list">
                    <li><a href="#">Lifestyle <span>(05)</span></a></li>
                    <li><a href="#">Travel <span>(34)</span></a></li>
                    <li><a href="#">Fashion <span>(89)</span></a></li>
                    <li><a href="#">Music <span>(92)</span></a></li>
                    <li><a href="#">Branding <span>(56)</span></a></li>
                  </ul>
                </div>
                <div className="widget mb-40">
                  <div className="widget-title text-center">
                    <h4>Feeds</h4>
                  </div>
                  <div className="widget__post">
                    <ul>
                      <li>
                        <div className="widget__post-thumb">
                          <img src="img/blog/aside/post_01.jpg" alt="" />
                        </div>
                        <div className="widget__post-content">
                          <h6><a href="#">Alonso kelina falao asiano pero</a></h6>
                          <span><i className="far fa-clock"></i>1 Hours ago</span>
                        </div>
                      </li>
                      <li>
                        <div className="widget__post-thumb">
                          <img src="img/blog/aside/post_02.jpg" alt="" />
                        </div>
                        <div className="widget__post-content">
                          <h6><a href="#">It is a long established fact that a reader</a></h6>
                          <span><i className="far fa-clock"></i>3 Hours ago</span>
                        </div>
                      </li>
                      <li>
                        <div className="widget__post-thumb">
                          <img src="img/blog/aside/post_03.jpg" alt="" />
                        </div>
                        <div className="widget__post-content">
                          <h6><a href="#">Many desktop publish packages and web</a></h6>
                          <span><i className="far fa-clock"></i>5 Hours ago</span>
                        </div>
                      </li>
                      <li>
                        <div className="widget__post-thumb">
                          <img src="img/blog/aside/post_04.jpg" alt="" />
                        </div>
                        <div className="widget__post-content">
                          <h6><a href="#">Various versions have evolved over the years</a></h6>
                          <span><i className="far fa-clock"></i>6 Hours ago</span>
                        </div>
                      </li>
                      <li>
                        <div className="widget__post-thumb">
                          <img src="img/blog/aside/post_05.jpg" alt="" />
                        </div>
                        <div className="widget__post-content">
                          <h6><a href="#">Photo booth anim 8-bit PBR 3 wolf moon.</a></h6>
                          <span><i className="far fa-clock"></i>8 Hours ago</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget mb-40">
                  <div className="widget-title text-center">
                    <h4>Tags</h4>
                  </div>
                  <div className="widget__tag">
                    <ul>
                      <li><a href="#">Travel</a></li>
                      <li><a href="#">Lifestyle</a></li>
                      <li><a href="#">Photo</a></li>
                      <li><a href="#">Adventures</a></li>
                      <li><a href="#">Musician</a></li>
                      <li><a href="#">08</a></li>
                      <li><a href="#">Travel</a></li>
                      <li><a href="#">Lifestyle</a></li>
                      <li><a href="#">Photo</a></li>
                      <li><a href="#">Adventures</a></li>
                      <li><a href="#">Musician</a></li>
                      <li><a href="#">08</a></li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}