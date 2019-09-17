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
  if(MenuData==='About'||MenuData==='Our Work'||MenuData==='Home'||MenuData==='Contact'){
    let elmnt = document.getElementById(MenuData);
    elmnt.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  }else{
    alert('Under Progress')
  }

}
  return (
    <>
      <div>
      <Header siteTitle={data.site.siteMetadata.title} Scroll={Scroll}/>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
