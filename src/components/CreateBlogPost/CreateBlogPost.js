import { useDropzone } from 'react-dropzone';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './resources/create-blog-post.css';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import httpClient from '../../utils/httpClient';

const CreateBlogPost = () => {
    const { user } = useContext(AuthContext);
    const [files, setFiles] = useState([]);
    const [postType, setPostType] = useState(2);
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
            });
        },
    });

    const cx = classNames.bind(styles);

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    const imageContainerDiv = cx({
        'blog-inner-header-placeholder': true,
        'dashed-border': !files.length,
    });

    const imageContainerContent = cx({
        'd-none': files.length,
    });

    const removeImage = cx({
        'd-none': !files.length,
    });

    const handleThumbnailRemove = (e) => {
        e.stopPropagation();
        setFiles([]);
    }

    const handleTypeChange = (e) => {
        setPostType(e.target.value);
    }

    const handleFormSubmission = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('thumbnail', files[0]);
        formData.append('user_id', user.id);

        httpClient.post('/api/posts', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        }).then(response => console.log(response));
    }

    return (
        <section className="inner-blog b-details-p pt-100 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="bsingle__post mb-50">
                            <div className="blog-details-wrap">
                                <form method="POST" action="" onSubmit={(e) => handleFormSubmission(e)}>
                                    <div className="bsingle__post-thumb mb-30">
                                        <div {...getRootProps({ className: 'dropzone' })}
                                            className={imageContainerDiv}
                                            style={{ 'backgroundImage': `url(${files[0] ? files[0].preview : ''})` }}
                                        >
                                            <input {...getInputProps()} />
                                            <p className={imageContainerContent}>
                                                Drag and drop or select a Thumbnail
                                            </p>

                                            <div className='image-remove text-primary'>
                                                <button onClick={(e) => handleThumbnailRemove(e)} className={`btn btn-danger fas fa-trash fa-lg ${removeImage}`}></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <input type="text" name="title" className="form-control" placeholder="Title" />
                                        </div>
                                        <div className="col">
                                            <select onChange={(e) => handleTypeChange(e)} name="type" className="form-control">
                                                <option value="2">Normal</option>
                                                <option value="1">Video</option>
                                                <option value="3">Music</option>
                                            </select>
                                        </div>
                                        {postType != 2 && (
                                            <div className="col">
                                                <input type="text" name="resource" className="form-control" placeholder="Resource Link" />
                                            </div>
                                        )}
                                        <div className="col-12">
                                            <textarea cols="10" rows="10" name="content" className="form-control mt-20">
                                            </textarea>
                                        </div>
                                        <div className="col-12 mt-20">
                                            <button className="btn btn-primary">Create</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateBlogPost;