import React, { useEffect, useState } from 'react';
import "./BlogForm.css";

function BlogForm(props) {
    const [url,setUrl] = useState("");
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const postBlogHandler = (event)=>{
        event.preventDefault();
        const details={
            "url":url,"title":title,"description":description
        }
        props.onAdd(details);
        setUrl("");
        setTitle("");
        setDescription("");

    }

    const urlChangeHandler = (event)=>{
        setUrl(event.target.value);
    }
    const titleChangeHandler = (event)=>{
        setTitle(event.target.value);
    }
    const descriptionChangeHandler = (event)=>{
        setDescription(event.target.value);
    }
    

    return (
       <form onSubmit={postBlogHandler}>
        <div className='form-control'>
            <div>
                <label htmlFor='image'>Image URL: </label>
                <input id='image' value={url} onChange={urlChangeHandler} type='text'/>
            </div>
            <div>
                <label htmlFor='title'>Title :  </label>
                <input id='title' value={title} onChange={titleChangeHandler} type='text'/>
            </div>
            <div>
                <label htmlFor='description'>Description :  </label>
                <input id='description' value={description} onChange={descriptionChangeHandler} type='text'/>
            </div>
            <button type='submit'>Post BLOG</button>
        </div>
       </form>
    )
}

export default BlogForm
