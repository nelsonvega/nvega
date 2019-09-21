import React from 'react'
import Header from '../components/header'
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "gatsby"
import ContactUS from '../components/Contactus/Contactus'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'
const BlogDetail = () => {
  const ScrollFromBlog=()=>{
    console.info('HOME')
    navigate("/")
}
  const data = useStaticQuery(graphql`
    query GetTitleData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (

    <div id="Bloger">
    <SEO title="Blog" />
     <Header siteTitle={data.site.siteMetadata.title} Scroll={ScrollFromBlog} ScrollID={'Bloger'}/>
     <div style={{display:'flex',flexDirection:'column'}}>
     <div className="BlogBg">
    <div style={{display:'flex',
    height:'100%',
    justifyContent:'flex-start',alignItems:'center'}}>
    <h1 className="BlogText">Blog</h1>
    </div>
     </div>
     <div style={{
     justifyContent:'center',
     display: 'flex'}}>
     <div className="MainBodyBolgList" style={{background:'white',margin: 10}}>
     <div className="MainBodyBolgListchild">
     <p className="full_heading">
     Connecting teams to support 50 million customers around the world
     </p>
     <div className="DateTime">
     <div style={{padding:10}} className="NormalFont">By</div>
     <div className="AboutBlogAuther">Nelson Vega</div>
     <div style={{padding:10}}>|</div>
     <div className="AboutBlogAuther">Business</div>
     <div style={{padding:10}}>|</div>
     <div className="NormalFont">September 10, 2019</div>
     </div>
     </div>
 <div className="BlogContentStyle">
     <div style={{height:'auto'}}>
     <p className="BlogList">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius cum qui laudantium, sint. Voluptate magnam ullam neque expedita deleniti non veniam dignissimos cum, eligendi, cumque adipisci aspernatur possimus rerum debitis!</p>
     <p className="BlogList">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius cum qui laudantium, sint. Voluptate magnam ullam neque expedita deleniti non veniam dignissimos cum, eligendi, cumque adipisci aspernatur possimus rerum debitis!
     </p>
     <h1 className="BlOlistHeading">
     Heading 1
     </h1>
     <p className="BlogList">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius cum qui laudantium, sint. Voluptate magnam ullam neque expedita deleniti non veniam dignissimos cum, eligendi, cumque adipisci aspernatur possimus rerum debitis!</p>
     <p className="BlogList">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius cum qui laudantium, sint. Voluptate magnam ullam neque expedita deleniti non veniam dignissimos cum, eligendi, cumque adipisci aspernatur possimus rerum debitis!
     </p>
     </div>
     <div>
     <img alt="BlogListImage" className="BlogListImage" src={require('../images/my_work.png')}></img>
    </div>
    <div style={{margin:10}}>
    <h1 className="BlOlistHeading">
     Heading 2
     </h1>
     <p className="BlogList">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius cum qui laudantium, sint. Voluptate magnam ullam neque expedita deleniti non veniam dignissimos cum, eligendi, cumque adipisci aspernatur possimus rerum debitis!</p>
     <p className="BlogList">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius cum qui laudantium, sint. Voluptate magnam ullam neque expedita deleniti non veniam dignissimos cum, eligendi, cumque adipisci aspernatur possimus rerum debitis!
     </p>
    </div>
    </div>
     </div>
     </div>
     </div>
     <div>
        <div style={{height:'5vh',background:'#e7e5e5'}}></div>
     <div style={{width:'100%'}}>
     <div style={{display:'flex',
     flexDirection:'column',height:'100%'}}>
     <div className="RealtedbLOGhEADER">
       <h4 className="vlog_textBlogList">RELATED BLOG</h4>
     </div>
     <div style={{display:'flex',width:'100%',
     justifyContent:'space-between',
     flexDirection:'column'}}>
     <div style={{
     alignItems:'center',
     justifyContent:'space-between',
     display:'flex',
     flexDirection:'row'}}>
     <BlogCard Loop={true}/>
     </div>
     </div>
     </div>
     </div>
     </div>
     <div style={{height:'10vh',background:'#e7e5e5'}}></div>
     <ContactUS/>
     <Footer/>
     </div>

   
  )
}

export default BlogDetail
