/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import { navigate } from "gatsby"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
const Scroll=(MenuData)=>{
  console.info(MenuData)
  if(MenuData==="Vlog" ||MenuData==="Blog"  || MenuData==='About'||MenuData==='My Work'||MenuData==='Home'||MenuData==='Contact'){
   if(MenuData==="Blog"){
    navigate('/Blog')
    return false;
   }
    let elmnt = document.getElementById(MenuData);
     elmnt.scrollIntoView({ behavior: 'smooth'});
  }else{
    alert('Under Progress')
  }

}
  return (
    <>
      <div>
      <Header siteTitle={data.site.siteMetadata.title} Scroll={Scroll} ScrollID={'Home'}/>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
