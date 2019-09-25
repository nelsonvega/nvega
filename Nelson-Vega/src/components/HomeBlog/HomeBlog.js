import React from 'react';
import './HomeBlog.css'
import BlogCard from '../BlogCard'
const HomeBlog = () => {
  return (
    <div className="HomeBlogContaninr" id="Blog">
       <div style={{display: 'flex',
       flexDirection: 'column',
       height:'100%'}}>
       <div className="HomeBlogHead">
       <h3 style={{margin:0,fontSize:'2.2rem',color:'#d5b004'}}>FEATURED ARTICLE FROM THE</h3>
       <h1 className="HeadHomeBlog">Blog</h1>
       </div>
       <BlogCard Loop={true}/>
       <div style={{height:'10vh',background:'#e7e5e5'}}></div>
       </div>
       </div>
      
   
  )
}
export default HomeBlog
