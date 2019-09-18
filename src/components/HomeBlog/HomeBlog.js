import React from 'react'
import './HomeBlog.css'
const HomeBlog = () => {
  const ImageData=[
    {Main:'Blog_one.png',
    Content:'Connecting teams to support 50 million customers around the world',
    ChildImage:'logo-intuit-preferred.png'},
    {Main:'Blog_two.png',
    Content:'Scaling feedback from the inside out',
    ChildImage:'survey_monkey.png'},
    {Main:'Blog_three.png',
    Content:'Improving collaboration with APP',
    ChildImage:'BBC.png'},
    {Main:'Blog_four.png',
    Content:'Unifying product experience and company culture at Autodesk',
    ChildImage:'autodesk.png'},
  ]
  return (
    <div className="HomeBlogContaninr" id="Blog">
       <div style={{display: 'flex',
       flexDirection: 'column',
       height:'100%'}}>
       <div style={style.Heading}>
       <h3 style={{margin:0,fontSize:'2.2rem',color:'#d5b004'}}>FEATURED ARTICLE FROM THE</h3>
       <h1 className="HeadHomeBlog">Blog</h1>
       </div>
       <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
       <div className="HomeBlogCard">
       {ImageData.map(data=>{
        return <div key={data.Main} className="CardStyle">
                <div style={{height:'50%'}}>
                <img className="blog_thumb_image"  src={require(`../../images/${data.Main}`)} alt={data.Main}></img>
                </div>
                <div className="ChildThmub">
                <img className="blog_thumb"  src={require(`../../images/${data.ChildImage}`)} alt={data.ChildImage}></img>
                </div>
                <div style={{height:'30%',display:'flex',alignItems:'center'}}>
                <p className="thumb_content">{data.Content}</p>
                </div>
         </div>
        })
        }
       </div>
       </div>
       </div>
    </div>
  )
}
const style={
    Heading:{
      height:'35%',
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
export default HomeBlog
