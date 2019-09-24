import React,{useState} from 'react'
import './TESTIMONIALS.css'
import {NavigateNext,NavigateBefore} from '@material-ui/icons';
const TESTIMONIALS = () => {
  const [count, setCount] = useState(0);
  let interval = setInterval(() => {
  TranformLeft('Right')
  }, 3000);
  const TranformLeft=(Type)=>{
    let fadeTarget=document.getElementById("HeadingSlierpSlider");
    clearInterval(interval);  
    const fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
          fadeTarget.style.opacity=1
          if(Type==='Right'){
            if(count===2){
              setCount(0)
            }else{
                 setCount(count+1)
            }
          }else{
            if(count===0){
              setCount(2)
            }else{
              setCount(count-1)
            }
          }
      }
    }, 80); 
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
       
          <NavigateBefore onClick={()=>TranformLeft('Left')} className="IconSTyle"/>
        
        
        </div>
        </div>

        <div id="sliderEffect" style={{width:'90%',display: 'flex',
         alignItems:'center',
         textAlign:'center',
         flexDirection: 'column',
        justifyContent:'center'}}>
      {[{
        index:0,
        User:'Hrishikesh Mafatlal',
        Text:'Vice chairman & the Chief Executive of the Arvind Mafatlal Group of Companies'
      },
      {
        index:1,
        User:'Lorem Ipsum',
        Text:'In Informatics, dummy data is benign information that does not contain any useful data.'
      },
      {
        index:2,
        User:'Lorem Data',
        Text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
      },
    ].map(data=>{
      let Image=require('../../images/testimonial.png');
        if(count===data.index){
          return   <div key={data.toString()} 
          id="HeadingSlierpSlider">
          <h5 className="HeadingSlier">{data.User}</h5>
        
          <p className="HeadingSlierp">{data.Text}</p>
        
          <div>
          <img alt="testimonial.png"  src={Image}></img>
          </div>
          </div>
        }else{
          return null;
        }
      })}
        </div>
        <div style={{width:'20%',display: 'flex',justifyContent:'flex-end'}}>
      
          <NavigateNext onClick={()=>TranformLeft('Right')} className="IconSTyle"/>
        
        </div>
        </div>
    </div>
    </div>
  )
}

export default TESTIMONIALS


