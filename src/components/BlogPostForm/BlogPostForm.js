import { useDropzone } from 'react-dropzone';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import styles from './resources/create-blog-post.css';

const BlogPostForm = ({
    article = null,
    type = 'edit',
    handleFormSubmission,
}) => {
    const [files, setFiles] = useState([]);
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm();
    let { type: postType = 2 } = watch();
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

                setValue('thumbnail', file);
    
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

    const handleFormData = (formData) => {
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

    return (
        <section className="inner-blog b-details-p pt-100 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="bsingle__post mb-50">
                            <div className="blog-details-wrap">
                                <form onSubmit={handleSubmit((data) => handleFormData(data))}>
                                    <div className="bsingle__post-thumb mb-30">
                                        <div {...getRootProps({ className: 'dropzone' })}
                                            className={imageContainerDiv}
                                            style={{ 'backgroundImage': `url(${loadPreviewImageUrl()})` }}
                                        >
                                            <div className="form-group">
                                                <input {...register('thumbnail', 
                                                    article?.slug ? {} : {
                                                        required: 'The Thumbnail field is required',
                                                    }
                                                )} {...getInputProps()}
                                                    className={`${imageContainerContent} ${errors.thumbnail ? 'is-invalid' : ''}`} />

                                                <div className="invalid-feedback">
                                                    {errors.thumbnail?.message}
                                                </div>
                                            </div>
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
                                                {...register('title', {
                                                    required: 'The Title field is required',
                                                    minLength: {
                                                        value: 6,
                                                        message: 'Minimum title length is 6 symbols'
                                                    }
                                                })}
                                                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                                defaultValue={article && article.title}
                                                placeholder="Title" />
                                            <div className="invalid-feedback">
                                                {errors.title?.message}
                                            </div>
                                        </div>

                                        <div className="col">
                                            <select
                                                {...register('type')}
                                                className="form-control">
                                                <option value="2">Normal</option>
                                                <option value="1">Video</option>
                                                <option value="3">Music</option>
                                            </select>
                                        </div>
                                        {postType != 2 && (
                                            <div className="col">
                                                <input type="text"
                                                    {...register('resource')}
                                                    className="form-control"
                                                    placeholder="Resource Link" />
                                            </div>
                                        )}
                                        <div className="col-12">
                                            <textarea
                                                cols="10"
                                                rows="10"
                                                {...register('content', {
                                                    required: 'The Content field is required',
                                                    minLength: {
                                                        value: 20,
                                                        message: 'The minimum content required is 20 symbols'
                                                    }
                                                })}
                                                className={`form-control mt-20 ${errors.content ? 'is-invalid' : ''}`}
                                                defaultValue={article && article.content}>
                                            </textarea>
                                            <div className="invalid-feedback">
                                                {errors.content?.message}
                                            </div>
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