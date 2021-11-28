import BlogPost from "../BlogPost";
import Pagination from "../Pagination";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import Breadcrumb from "../Breadcrumb/Breadcrumb";


const Blog = () => {
    const [apiRequestUri, setApiRequestUri] = useState('/api/posts');
    const { data: { data: posts, meta }, isPending } = useAxios(apiRequestUri);

    const handlePaginationApiUriUpdate = (uri) => {
        return setApiRequestUri(uri)
    }

    return (
        <>
            <Breadcrumb name="Blog posts"/>
            <section className="inner-blog pt-100 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            {!isPending && (
                                posts.map((post, index) => <BlogPost key={index} post={post} />)
                            )}

                            {!isPending && (
                                <Pagination pagination={meta} handlePaginationApiUriUpdate={handlePaginationApiUriUpdate} />
                            )}

                        </div>
                        <div className="col-lg-4">
                            <aside>
                                {/* <div className="widget mb-40">
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
                                </div> */}
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;