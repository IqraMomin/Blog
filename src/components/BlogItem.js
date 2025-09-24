import React from 'react';
import "./BlogItem.css";

function BlogItem(props) {
    const editBlogHandler = ()=>{
        const blog = {
            id:props.id,url:props.url,title:props.title,description:props.description
        }
        props.onEdit(blog);
    }
    const deleteBlogHandler = ()=>{
        props.onDelete(props.id);
    }
    return (
        <div className='blog-elements'>
            <h2>{props.title}</h2>
            <img src={props.url} alt={props.description}/>
            <p>{props.description}</p>
            <button type='click' onClick={editBlogHandler}>Edit BLOG</button>
            <button type='click' onClick={deleteBlogHandler}>Delete BLOG</button>           
        </div>
    )
}

export default BlogItem
