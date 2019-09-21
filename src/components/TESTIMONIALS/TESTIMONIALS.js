import React from 'react'
import './TESTIMONIALS.css'
import {NavigateNext,NavigateBefore} from '@material-ui/icons';
const TESTIMONIALS = () => {
  const TranformLeft=()=>{
    let fadeTarget=document.getElementById('HeadingSlierp');
    const fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
          fadeTarget.style.opacity=1
      }
    }, 50);
  }
  return (
    <div style={{width:'100%',
    justifyContent:'center',
    backgroundColor:'#f2f1f1',
    alignItems:'center',
    display: 'flex'}}>
    <div className="ContainerTESTimominals">
        <div className="MainConTainerTest" style={{
        width:'100%',
        alignItems:'center',flexDirection: 'column',
        display: 'flex',justifyContent:'center'}}>
        <h3 className="what_peple_say_text">WHAT PEOPLE SAY</h3>
      <div className="BorderBotomTest">
      <h1 className="Testimonials_text">TESTIMONIALS</h1>
      </div>
        </div>
        <div className="testimonialcontent_cLASS">
        <p>
        "In this increasingly complex world, whee placing trust in somqone is
                a hazardous occupation, here comes a refreshingly simple yet effective
                guide to improving our lives and reducing stress"
        </p>
        </div>
        <div className="SliderClassTest">
        <div style={{width:'20%'}}>
        <div className="NextTest">
        <NavigateBefore onClick={TranformLeft} className="IconSTyle"/>
        </div>
        </div>

        <div style={{width:'90%',display: 'flex',
         alignItems:'center',
         textAlign:'center',
         flexDirection: 'column',
        justifyContent:'center'}}>
        <div id="HeadingSlierp">
        <h5 className="HeadingSlier">Hrishikesh Mafatlal</h5>
      
        <p className="HeadingSlierp">Vice chairman & the Chief Executive of the Arvind Mafatlal Group of Companies</p>
      
        <div>
        <img alt="testimonial.png"  src={require('../../images/testimonial.png')}></img>
        </div>
        </div>
        </div>
        <div style={{width:'20%',display: 'flex',justifyContent:'flex-end'}}>
        <NavigateNext onClick={TranformLeft} className="IconSTyle"/>
        </div>
        </div>
    </div>
    </div>
  )
}

export default TESTIMONIALS


