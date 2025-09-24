import React from 'react'
import BlogItem from './BlogItem'
import "./BlogList.css";

function BlogList(props) {
    return (
        <div className='blog-list'>
            {props.blogDetails.map((ele,i)=>{
                return <BlogItem 
                onDelete={props.onDelete} 
                onEdit={props.onEdit}
                index={i} 
                key={i} 
                title={ele.title} 
                url={ele.url} 
                description={ele.description}/>
            })}
            
            
        </div>
    )
}

export default BlogList
