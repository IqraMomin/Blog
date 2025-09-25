import { React, useState, useEffect } from 'react'
import BlogForm from './BlogForm'
import BlogList from './BlogList'
import "./BlogPage.css";

function BlogPage() {
    const [list, setList] = useState(() => {
        const data = JSON.parse(localStorage.getItem("blog")) || [];
        return data;
    })
    const [editBlog, setEditBlog] = useState(null);
    const [isEditing,setIsEditing] = useState(false);
    useEffect(() => {
        localStorage.setItem("blog", JSON.stringify(list));
    }, [list]);

    const addDetailsHandler = (userObj) => {
        const existing = list.find(b=> b.id === (userObj.id));
        if (existing ) {
            setList((prev) => {
                return prev.map(b => {
                    return (b.id === userObj.id ? userObj : b);
                })
            })
        } else {
            setList((prev) => {
                return [...prev, userObj];
            })
        }
        setEditBlog(null);
    }
    const deleteBlog = (id) => {
        setList(() => {
            return list.filter((ele) => {
                return ele.id !== id;
            })
        })
    }
    const editBlogHandler = (blog) => {
        setEditBlog(blog);
    }
    const onCancel = ()=>{
        setEditBlog(null);
    }
    return (
        <div className="list-control">
            <div className='form-control'>
            {(!isEditing && <button className="btn" type="button" onClick={()=>{setIsEditing(true)}}>Post BLOG</button>)}
            {isEditing && 
            <BlogForm onAdd={addDetailsHandler} editBlog={editBlog} onCancel={onCancel} onClose={()=>{setIsEditing(false)}}/>}
             </div>
            <BlogList blogDetails={list} onDelete={deleteBlog} onEdit={editBlogHandler} />
           
        </div>
    )
}

export default BlogPage
