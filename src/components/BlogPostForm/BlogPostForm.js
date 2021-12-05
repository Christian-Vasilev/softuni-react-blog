import { useDropzone } from 'react-dropzone';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './resources/create-blog-post.css';

const BlogPostForm = ({
    article = null,
    type = 'edit',
    handleFormSubmission,
    user
}) => {
    const [files, setFiles] = useState([]);
    const [postType, setPostType] = useState(2);
    const [validationErrors, setValidationErrors] = useState({});
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            acceptedFiles.map(file => {
                const reader = new FileReader();
                reader.onload = event => {
                    setFiles(prevState => [
                        ...prevState,
                        Object.assign(file, {
                            preview: URL.createObjectURL(file),
                            base64encode: event.target.result
                        })
                    ]);
                }
                reader.readAsDataURL(file);

                return file;
            });
        },
    });

    const loadPreviewImageUrl = () => {
        return files.length ? files[0].preview : article?.thumbnails[0]
    }

    const cx = classNames.bind(styles);

    const imageContainerDiv = cx({
        'blog-inner-header-placeholder': true,
        'dashed-border': !files.length && !article,
    });

    const imageContainerContent = cx({
        'd-none': files.length,
    });

    const removeImage = cx({
        'd-none': !files.length,
    });
    
    const handleTypeChange = (e) => {
        setPostType(e.target.value);
    }

    const handleFormData = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        if (files.length) {
            formData.append('thumbnail', files[0]);
        }

        formData.append('user_id', user.id);

        return handleFormSubmission(formData);
    }

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const handleThumbnailRemove = (e) => {
        e.stopPropagation();
        setFiles([]);
    }

    const handleTitleValidation = (e) => {
        const title = e.target.value.trim();
        let isInvalid = false;
        let validationMessage = '';

        if (title.length < 6) {
            isInvalid = true;
            validationMessage = 'Title must be atleast 6 symbols';
        }

        if (title.search(/^[A-Za-z0-9_.-\s]+$/)) {
            isInvalid = true;
            validationMessage = 'Title must contain only characters and numbers';
        }

        if (isInvalid) {
            e.target.classList.add('is-invalid');
            setValidationErrors(prevState => {
                return {
                    ...prevState,
                    title: validationMessage
                }
            });
        }

        (!isInvalid && e.target.classList.contains('is-invalid'))
            && e.target.classList.remove('is-invalid');
    }

    return (
        <section className="inner-blog b-details-p pt-100 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="bsingle__post mb-50">
                            <div className="blog-details-wrap">
                                <form method="POST" action="" onSubmit={(e) => handleFormData(e)}>
                                    <div className="bsingle__post-thumb mb-30">
                                        <div {...getRootProps({ className: 'dropzone' })}
                                            className={imageContainerDiv}
                                            style={{ 'backgroundImage': `url(${loadPreviewImageUrl()})` }}
                                        >
                                            <input {...getInputProps()} />
                                            <p className={imageContainerContent}>
                                                Drag and drop or select to change the Thumbnail
                                            </p>

                                            <div className='image-remove text-primary'>
                                                <button onClick={(e) => handleThumbnailRemove(e)} className={`btn btn-danger fas fa-trash fa-lg ${removeImage}`}></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <input type="text"
                                                name="title"
                                                onBlur={(e) => handleTitleValidation(e)}
                                                className="form-control"
                                                defaultValue={article && article.title}
                                                placeholder="Title" />
                                            <div className="invalid-feedback">
                                                {validationErrors.title}
                                            </div>
                                        </div>

                                        <div className="col">
                                            <select onChange={(e) => handleTypeChange(e)} name="type" className="form-control">
                                                <option value="2">Normal</option>
                                                <option value="1">Video</option>
                                                <option value="3">Music</option>
                                            </select>
                                        </div>
                                        {postType !== 2 && (
                                            <div className="col">
                                                <input type="text"
                                                    name="resource"
                                                    className="form-control"
                                                    placeholder="Resource Link" />
                                            </div>
                                        )}
                                        <div className="col-12">
                                            <textarea
                                                cols="10"
                                                rows="10"
                                                name="content"
                                                className="form-control mt-20"
                                                defaultValue={article && article.content}>
                                            </textarea>
                                        </div>
                                        <div className="col-12 mt-20">
                                            <button className="btn btn-primary">{type.toUpperCase()}</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogPostForm;