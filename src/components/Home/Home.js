import React from 'react'
import SEO from '../../components/seo'
import './Home.css'
const Home = () => {
  return (
    <div className="HomeContainer" id="Home">
    <SEO title="Home" />
    <div className="BackGroundImage">
        <div className="Content">
        <h1 className="HeadingStyle">INSPIRING MINDS. Transforming tech</h1>
        <h3 className="HeadingStyleInner">CEO | Coder | Instructer | Influencer</h3>
        <button className="ButtonStyle">Let's Talk</button>
        </div>

    </div>
       {/* <div className="BackGroundImage">
       <div className="HomeDesc">
       <h1 className="HeadingStyle">INSPIRING MINDS. Transforming tech</h1>
       <h3 className="HeadingStyleInner">CEO | Coder | Instructer | Influencer</h3>
       <button className="ButtonStyle">
       LET'S TALK
       </button>
       </div>
       </div> */}
    </div>
  )
}

export default Home
