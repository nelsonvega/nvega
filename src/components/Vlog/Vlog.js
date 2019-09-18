import React from 'react'
import './Vlog.css'
const Vlog = () => {
  return (
    <div className="VlogContiner" id="Vlog">
       <div style={{display: 'flex',
       flexDirection: 'column',
       height:'100%'}}>
       <div style={style.Heading}>
       <h3 style={{margin:0,fontSize:'2.2rem',color:'#d5b004'}}>FEATURED VIDEOS FROM THE</h3>
       <h1 className="HeadVlog">VLog</h1>
       </div>
       <div className="ImageStyle">
         {['Huma.jpg','vlog.png','vlog_two.png'].map(data=>{
         return <div 
         key={data}
         className="ImageHover"
          style={{width:'25%',
          height:'100%'}}>
             <div className="TextStyleCard">
               <div>
               <p className="date">June 10, 2019</p>
               <p className="short_desc">If you need to say sorry to somone -Watch this</p>
               </div>
             </div>
             <img  style={{width:'100%',height:'100%',objectFit:'cover'}} 
           alt={data} src={require(`../../images/${data}`)}></img>
           </div>
         })
         }
       </div>
       <div style={style.buttoncontent}>
       <button className="VlogButtonStyle">Watch More</button>
       </div>
       </div>
    </div>
  )
}
const style={
    Heading:{
      height:'35%',backgroundColor:'white',
      flexDirection: 'column',
      display: 'flex',justifyContent: 'center',
      alignItems: 'center',
      
    },
    buttoncontent:{
      height:'20%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
}
export default Vlog
