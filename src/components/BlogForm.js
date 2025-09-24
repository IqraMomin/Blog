import React, { useEffect, useState } from 'react';
import "./BlogForm.css";

function BlogForm(props) {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState("");
    const [button, setButton] = useState("Post BLOG");

    useEffect(() => {
        if (props.editBlog) {
            setId(props.editBlog.id);
            setButton("Edit BLOG");
            setUrl(props.editBlog.url);
            setTitle(props.editBlog.title);
            setDescription(props.editBlog.description);
        } else {
            setButton("Post BLOG");
            setId("");
            setUrl("");
            setTitle("");
            setDescription("");
        }
    }, [props.editBlog]);

    const postBlogHandler = (event) => {
        event.preventDefault();
        const details = {
            url: url, title: title, description: description, id: id || Date.now()
        }
        props.onAdd(details);


        setUrl("");
        setTitle("");
        setDescription("");
        setId("");

    }

    const urlChangeHandler = (event) => {
        setUrl(event.target.value);
    }
    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }


    return (
        <form onSubmit={postBlogHandler}>
            <div className='form-control'>
                <div>
                    <label htmlFor='image'>Image URL: </label>
                    <input id='image' value={url} onChange={urlChangeHandler} type='text' />
                </div>
                <div>
                    <label htmlFor='title'>Title :  </label>
                    <input id='title' value={title} onChange={titleChangeHandler} type='text' />
                </div>
                <div>
                    <label htmlFor='description'>Description :  </label>
                    <input id='description' value={description} onChange={descriptionChangeHandler} type='text' />
                </div>
                <button type='submit'>{button}</button>
            </div>
        </form>
    )
}

export default BlogForm
