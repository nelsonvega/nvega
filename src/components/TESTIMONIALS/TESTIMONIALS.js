import React,{useState,useEffect} from 'react'
import './TESTIMONIALS.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import {NavigateNext,NavigateBefore} from '@material-ui/icons';
const TESTIMONIALS = () => {
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState(null);
  const handleSelect = (selectedIndex, e) => {
    setCount(selectedIndex);
    setDirection(e.direction);
  };
useEffect(() => {
    setTimeout(() => {
      setCount(0);
    }, 3000);
}, [])
const DataSlide=[0,1,2]
  return (
    // <div style={{width:'100%',
    // justifyContent:'center',
    // backgroundColor:'#f2f1f1',
    // alignItems:'center',
    // display: 'flex'}}>
    // <div className="ContainerTESTimominals">
        // <div className="MainConTainerTest" style={{
        // width:'100%',
        // alignItems:'center',flexDirection: 'column',
        // display: 'flex',justifyContent:'center'}}>
        // <h3 className="what_peple_say_text">WHAT PEOPLE SAY</h3>
      // <div className="BorderBotomTest">
      // <h1 className="Testimonials_text">TESTIMONIALS</h1>
      // </div>
        // </div>
        // <div className="testimonialcontent_cLASS">
        // <p>
        // "In this increasingly complex world, whee placing trust in somqone is
                // a hazardous occupation, here comes a refreshingly simple yet effective
                // guide to improving our lives and reducing stress"
        // </p>
        // </div> 
        // <div style={{width:'100%'}}>
         // <Carousel 
         // interval={3000}
        // indicators={false} activeIndex={count} direction={direction} onSelect={handleSelect}
        // nextIcon={<NavigateNext className="IconSTyle"/>}
        // prevIcon={<NavigateBefore className="IconSTyle"/>}
        // >
         // {DataSlide.map(Data=>{
          // let Image=require('../../images/testimonial.png');
           // return <div key={Data.toString()} className="SliderReact">
          // <div>
          // <strong className="HeadingSlier">Hrishikesh Mafatlal</strong>
          // </div> 
           // <div>
           // <p className="HeadingSlierp">Vice chairman & the Chief Executive of the Arvind Mafatlal Group of Companies</p>
           // </div>
           // <div>
           // <img alt="testimonial.png"  src={Image}></img>
           // </div>
            // </div>
         // })
         // }     
        // </Carousel>
        // </div>

 
    // </div>
    // </div>
  )
}

export default TESTIMONIALS

// <div style={{width:'100%'}}>
// <Carousel 
// nextIcon={<NavigateNext className="IconSTyle"/>}
// prevIcon={<NavigateBefore className="IconSTyle"/>}
// indicators={false} activeIndex={count} direction={direction} onSelect={handleSelect}>
// {DataSlide.map(DataList=>{
// let Image=require('../../images/testimonial.png');
// return    <Carousel.Item>
// <div style={{display:'flex',
// alignItems:'center',
// justifyContent:'center',flexDirection:'column'}}>
// <h5 className="HeadingSlier">{'Hrishikesh Mafatlal'}</h5>
// <p className="HeadingSlierp">{'Vice chairman & the Chief Executive of the Arvind Mafatlal Group of Companies'}</p>
// <div>
// <img alt="testimonial.png"  src={Image}></img>
// </div>
// </div>
// </Carousel.Item>
// })
// }
// </Carousel>
// </div>


