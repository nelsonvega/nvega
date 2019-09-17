import React from 'react'
import './About.css'
import SEO from '../../components/seo'
// import Grid from '@material-ui/core/Grid';
const About = () => {
  return (
    <div className="AboutContiner" id="About">
    <SEO title="About Us" />
    <p style={{fontSize:'4rem',color:'white',fontWeight:'bold'}}>About Us......</p>
     {/* <div className="GridAlign">
     <Grid container spacing={0}>
       <Grid item xs={12} sm={6} className="ContinerStyleleft">
       <img src={require('../../images/my-journey_image.png')} alt="my-journey"/>
       </Grid>
       <Grid item xs={12} sm={6} className="ContinerStyleRiht"> */}
       {/*<h3 className="Heading">MY Journey</h3>
       <p className="desc">It's not every day that you visit a monk's
           website. I want to thank you for being here! I
           have been a practicing monk for twenty-
           three years, trying to understand the deeper
           aspects of the human condition: our
           relationships, our happiness and our purpose.
       </p>
        <p className="desc">
           Today i am a storyteller, life coach, author
           and a friend to millions that are following my
           journey on social media. My videos have
           reached over 500 million views and are all
           focused on one thing: Making a difference!
     </p>*/}
       {/* </Grid>
     </Grid>
     </div> */}
    </div>
  )
}

export default About
