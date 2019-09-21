import React, { useState } from 'react';
import './Vlog.css'
import VLog from '../VlogCard'
import {NavigateNext,NavigateBefore} from '@material-ui/icons';
const Vlog = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="VlogContiner" id="Vlog">
       <div style={{display: 'flex',
       flexDirection: 'column',
       backgroundColor:'#f2f1f1',
       height:'100%'}}>
       <div className="VlogHeadingText" style={style.Heading}>
       <h3 style={{margin:0,fontSize:'2.2rem',color:'#d5b004'}}>FEATURED VIDEOS FROM THE</h3>
       <h1 className="HeadVlog">VLog</h1>
       </div>
       <div className="SlidervLOG">
       {['Huma.jpg','vlog.png','vlog_two.png'].map((data,index)=>{
         let  bg=require(`../../images/${data}`);
         return <div key={index.toString()}  style={{width: '100%'}}>
                  {(index===count)&&
                  <>
                    
           <div style={{
            backgroundSize:'cover',
            backgroundImage: "url("+bg+")", 
            height:270,width:'100%'}}>
            <div style={{display:'flex',flexDirection:'row',width:'100%',height:'100%'}}>
            <div className="ButtonVlogStyle">
            {(index!==0)&&
              <NavigateBefore onClick={() => setCount(count-1)} className="IconSTyleVlog"/>
            }
            </div>
            <div style={{width:'80%'}}>
            <div className="ContentStyleMobileVlog">
            <p className="date">June 10, 2019</p>
            <p className="short_desc">If you need to say sorry to somone -Watch this</p>
            </div>
            </div>
            <div className="ButtonVlogStyle">
            {(index!==2)&&
              <NavigateNext onClick={() => setCount(count+1)}  className="IconSTyleVlog"/>
            }
            </div>
            </div>
       
           </div>
                  </>
                   }
              </div>
       })
      }
       </div>
       <div className="ImageStyle">
         {['Huma.jpg','vlog.png','vlog_two.png'].map((data,index)=>{
         return <div 
         key={index.toString()}
          style={{width:'30%',
          height:'100%'}}>
           <VLog ImageName={data}/>
           </div>
         })
         }
       </div>
       <div style={{height:'30vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
       <button className="VlogButtonStyle">Watch More</button>
       </div>
       </div>
    </div>
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
