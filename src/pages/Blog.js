import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Header from '../components/header'
import ContactUS from '../components/Contactus/Contactus'
import Footer from '../components/Footer'
import Grid from '@material-ui/core/Grid';
import BlogCard from '../components/BlogCard'
import { navigate } from "gatsby"
const BlogPage = () =>{
  const ScrollFromBlog=()=>{
        console.info('HOME')
        navigate("/")
    }
    const GotoBlog=()=>{
      navigate("/BlogDetail")
    }
const data = useStaticQuery(graphql`
    query GetTitle {
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
     <div>
     <Grid container spacing={0}>
     <Grid item xs={12} sm={6}>
     <div className="ImgeBlogStyle">
          <img alt="vlog.png" className="BlogIntroImage" src={require('../images/vlog.png')}></img>
     </div>
     </Grid>
     <Grid item xs={12} sm={6}>
     <div className="ImgeBlogStyleText">
     <div className="ContainerFix">
     <p style={{color:"#777",fontWeight:'bold',margin:'.5rem',fontSize:'3rem'}}>Intuit</p>
     <p style={{fontWeight:'bold',fontSize:'1.5rem',margin:'.5rem'}}>3 weeks ago</p>
     <p className="DynamicFontBlog" style={{color:"#b4975a",fontWeight:'bold',margin:'.5rem',width:'70%'}}>Connecting teams to support 50 million customers around the world</p>
     <button onClick={GotoBlog} style={{margin:'.5rem'}} className="ReadMeBtn">Read More</button>
     </div>
     </div>
     </Grid>
     </Grid>
     </div>
     <div style={{display:'flex',
     flexDirection:'column',
     justifyContent:'center',background:'#e7e5e5'}}>
     <div style={{height:'10vh',background:'#e7e5e5'}}></div>
     <BlogCard Loop={true}/>
     <BlogCard Loop={true}/>
     <BlogCard Loop={true}/>
     <BlogCard Loop={true}/>
     <div style={{height:'10vh',background:'#e7e5e5'}}></div>
     </div>
     </div>
     <ContactUS/>
     <Footer/>
  </div>
  )
}

export default BlogPage