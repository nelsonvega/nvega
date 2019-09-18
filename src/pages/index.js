import React,{ useEffect,useState } from "react"
import Layout from "../components/layout"
import Home from '../components/Home/Home'
import About from '../components/About/About'
import OurWork from '../components/OurWork/OurWork'
import ContactUS from '../components/Contactus/Contactus'
import Vlog from '../components/Vlog/Vlog'
import HomeBlog from '../components/HomeBlog/HomeBlog'
import Footer from '../components/Footer'
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
         <OurWork/>
         <Vlog/>
         <HomeBlog/>
         <ContactUS/>
       <Footer/>
      </Layout>
     )
}else{
  return (<div className="Loding">
         <strong style={{color:'white',fontSize:'2rem'}}>Loading....</strong>
          </div>)
}
}

export default IndexPage
