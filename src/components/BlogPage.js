import {React,useState,useEffect} from 'react'
import BlogForm from './BlogForm'
import BlogList from './BlogList'
import "./BlogPage.css";

function BlogPage() {
    const [list,setList] = useState(()=>{
        const data = JSON.parse(localStorage.getItem("blog")) || [];
        return data;
    })
    const [editBlog,setEditBlog] = useState(null);
    useEffect(()=>{
        localStorage.setItem("blog",JSON.stringify(list));
    },[list]);

    const addDetailsHandler = (userObj)=>{
        console.log(userObj);
        setList(prevList=>{
            return [userObj,...prevList];
        });
    }
    const deleteBlog = (index)=>{
        setList(()=>{
            return list.filter((_,i)=>{
                return i!==index;
            })
        })
    }
    const editBlogHandler = (blog)=>{
        setEditBlog(blog);
        
        
    }
    return (
        <div className="list-control">
            <BlogForm onAdd={addDetailsHandler} editblog={editBlog}/>
            <BlogList blogDetails={list} onDelete={deleteBlog} onEdit={editBlogHandler}/>
        </div>
    )
}

export default BlogPage
