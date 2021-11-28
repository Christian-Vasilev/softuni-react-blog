const Breadcrumb = ({ name }) => {
    return (
        <section className="breadcrumb-area d-flex align-items-center"
            style={{ backgroundImage: 'url(img/testimonial/test-bg.jpg)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                        <div className="breadcrumb-wrap text-center">
                            <div className="breadcrumb-title mb-30">
                                <h2>{name}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb;