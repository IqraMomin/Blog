import React from 'react'
import BlogItem from './BlogItem'
import "./BlogList.css";

function BlogList(props) {
    return (
        <div className='blog-list'>
            {props.blogDetails.map((ele)=>{
                return <BlogItem 
                onDelete={props.onDelete} 
                onEdit={props.onEdit} 
                key={ele.id} 
                title={ele.title} 
                url={ele.url} 
                description={ele.description}
                id={ele.id}/>
            })}
            
            
        </div>
    )
}

export default BlogList
