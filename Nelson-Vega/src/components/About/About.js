import React from 'react'
import './About.css'
import SEO from '../../components/seo'
// import Grid from '@material-ui/core/Grid';
const About = () => {
  return (
    <div className="AboutContiner" id="About">
    <SEO title="About Us" />
    <div className="GridAlign">
    <div className="ContainerMain">
      <div className="ImageStyleGrid">
      <img className="ImageCss" src={require('../../images/my-journey_image.png')} alt="my-journey"/> 
      </div>
    </div>
    <div className="ContainerMain">
    <div className="Desctyle">
		<h3 className="HeadingJourny">MY Journey</h3>
		<p className="desc-content"><i>Transformation is an ongoing process that tends to appear ordinary when in fact, something extraordinary is taking place. </i></p>
		<p className="desc-content">Hi! I am Nelson Vega. Thank you for taking the time out to know more about me.</p>
        <p className="desc-content">Originally from Cuba, I moved to the States in 2004, at the age of __. Interest in Information Technology since early childhood helped me pursue Software Engineering and mold into a coder at a young age. As an avid reader and explorer, my constant source of inspiration has been books and people. </p>
		<p className="desc-content">While sixteen years of Programming displayed my skills massively onto my resume, there was always this void I felt when it came to pursuing my passion - the zeal to help people and businesses grow. </p>
		<p className="desc-content">Today, I work as an Entrepreneur, and Life Coach to start-ups, established companies, or people; all intended towards one goal- making a difference. You can take a look at some of my personal favorite work here. (mobileappengine, kleio, codertoentrepreneur).</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default About
