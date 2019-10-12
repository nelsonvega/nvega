import React from 'react';
import './Vlog.css'
import VLog from '../VlogCard'
const Vlog = () => {
  return (
    // <div className="VlogContiner" id="Vlog">
       // <div style={{display: 'flex',
       // flexDirection: 'column',
       // backgroundColor:'#f2f1f1',
       // height:'100%'}}>
       // <div className="VlogHeadingText" style={style.Heading}>
       // <h3 style={{margin:0,fontSize:'2.2rem',color:'#d5b004'}}>FEATURED VIDEOS FROM THE</h3>
       // <h1 className="HeadVlog">VLog</h1>
       // </div>
       // <div className="SlidervLOG">
       {/* ['Huma.jpg','vlog.png','vlog_two.png'].map((data,index)=>{
         return <div key={index.toString()}  style={{width: '100%'}}>
              <div style={{margin:'1rem'}}>
              <VLog ImageName={data}/>
              </div>
                   
              </div>
       }) */
      }
       // </div>
       // <div className="ImageStyle">
         {/* ['Huma.jpg','vlog.png','vlog_two.png'].map((data,index)=>{
         return <div 
         key={index.toString()}
          style={{width:'30%',
          height:'100%'}}>
           <VLog ImageName={data}/>
           </div>
         }) */
         }
       // </div>
       // <div style={{height:'30vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
       // <button className="VlogButtonStyle">Watch More</button>
       // </div>
       // </div>
    // </div>
  )
}
const style={
    Heading:{
      flexDirection: 'column',
      display: 'flex',justifyContent: 'center',
      alignItems: 'center', 
    }
}
export default Vlog
