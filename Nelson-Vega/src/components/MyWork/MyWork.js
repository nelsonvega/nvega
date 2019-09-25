import React from 'react'
import './MyWork.css'
import Card from '@material-ui/core/Card';
import GraphMywork from '../GraphMyWork/GraphMywork'
const Mywork = () => {
  const OpenWeb=()=>{
    window.open("https://www.google.com/");
  }
  return (
    <div className="MobileMyWork" id="My Work">
        <div style={{height:'100%',
        display:'flex',flexDirection:'column',
        backgroundColor:'#f2f1f1',
        width:'100%'}}>
         <div className="MYworkheadingClasss">
         <h3 className="my_work" style={{margin: 10}}>MY WORK</h3>
         </div>
         <div>
            <p className="ithin_para">
            I think the greatest reward in my life is the opportunity 
            to add value to lives of others. 
            In the course of doing so many have been kind to recognize some of my 
            endeavors.
            </p>
         </div>
         <div className="GrpahStyle">
           <div className="ImageStyleWork">
           <GraphMywork/>
           </div>
         </div>
         <div className="MyworkBlogTYpe"> 
           {[
             {Name:'mobile_blog_blog_one.png',Text:'Business Start'},
             {Name:'mobile_blog_blog_two.png',Text:'Mannul Book'},
             {Name:'mobile_blog_blog_three.png',Text:'Fast Services'},
           ].map(data=>{
              return   <Card onClick={OpenWeb}  key={data.Name} style={{margin:5}}>
              <div style={{height:'40vh',display: 'flex',flexDirection:'column',margin:'1rem'}}>
                  <div style={{height:'100%'}}>
                       <img width={'100%'} alt={data} src={require(`../../images/${data.Name}`)}></img>
                  </div>  
                <h1 className="TextStyleOurWorkHead" style={{margin:0}}>
                {data.Text}
                </h1>
                <h6 className="TextStyleOurWork" style={{margin:0}}>Lorem ipsum is simply dummy text pf the printing</h6>
              </div>
           </Card>
           })
           }
         </div>
        </div>
    </div>
  )
}

export default Mywork;


// <img alt="my_work.png" className="ImageStyleWork" src={require('../../images/my_work.png')}></img>


