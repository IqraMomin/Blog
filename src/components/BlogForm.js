import React, { useEffect, useState } from 'react';
import "./BlogForm.css";

function BlogForm(props) {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        if (props.editBlog) {
            setId(props.editBlog.id);
            setUrl(props.editBlog.url);
            setTitle(props.editBlog.title);
            setDescription(props.editBlog.description);
        } else {
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
    const clearInputsHandler = ()=>{
            setTitle("");
            setUrl("");
            setDescription("");
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
                {props.editBlog && 
                <div className='form-btn'>
                <button type='submit'>Edit BLOG</button>
                <button type='click' onClick={()=>{
                    props.onCancel();
                }}>Cancel</button>
                <button type='button' onClick={clearInputsHandler}>Clear</button>
                </div>}
                {!props.editBlog && 
                <div className='form-btn'>
                <button type='submit'>Post BLOG</button>
                <button type='button' onClick={clearInputsHandler}>Clear</button>
                </div>}             
            </div>
        </form>
    )
}

export default BlogForm
