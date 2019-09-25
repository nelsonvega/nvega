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
       <p className="desc-content">It's not every day that you visit a monk's
           website. I want to thank you for being here! I
           have been a practicing monk for twenty-
           three years, trying to understand the deeper
           aspects of the human condition: our
           relationships, our happiness and our purpose.
       </p>
        <p className="desc-content">
           Today i am a storyteller, life coach, author
           and a friend to millions that are following my
           journey on social media. My videos have
           reached over 500 million views and are all
           focused on one thing: Making a difference!
     </p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default About
