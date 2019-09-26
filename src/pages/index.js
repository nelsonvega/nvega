import React,{ useEffect,useState } from "react"
import Layout from "../components/layout"
import Home from '../components/Home/Home'
import About from '../components/About/About'
import MyWork from '../components/MyWork/MyWork'
import ContactUS from '../components/Contactus/Contactus'
import Vlog from '../components/Vlog/Vlog'
import HomeBlog from '../components/HomeBlog/HomeBlog'
import Footer from '../components/Footer'
import Testimonials from '../components/TESTIMONIALS/TESTIMONIALS'
const IndexPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [loading]);   
   if(!loading){
     return (
     <Layout className="Index">
         <Home/>
          <About/>
         <MyWork/>
         <div className="MarginMain"/>
         <Testimonials/>
         <Vlog/>
         <HomeBlog/>
         <ContactUS/>
       <Footer/>
      </Layout>
     )
}else{
  return (<div className="Loding">
        <img alt="Loading" style={{width:100,height:100}} src={require('../images/gatsby-icon.png')}></img>
          </div>)
}
}

export default IndexPage
//  