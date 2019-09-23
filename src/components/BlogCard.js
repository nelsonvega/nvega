import React,{useState}from 'react'
import {NavigateNext,NavigateBefore} from '@material-ui/icons';
import { navigate } from "gatsby"
const BlogCard = (props) => {
  const [count, setCount] = useState(0);
  const CallBlog=()=>{
    navigate("/BlogDetail")
  }
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
    <div className="BlogListRealContent">
    <div className="HomeBlogCard">
    {ImageData.map((data,index)=>{
     return <div onClick={CallBlog}   key={index.toString()} className="CardStyle">
             <div style={{height:'50%'}}>
             <img className="blog_thumb_image"  src={require(`../images/${data.Main}`)} alt={data.Main}></img>
             </div>
             <div   className="ChildThmub">
             <img className="blog_thumb"  src={require(`../images/${data.ChildImage}`)} alt={data.ChildImage}></img>
             </div>
             <div style={{height:'30%',display:'flex',alignItems:'center'}}>
             <p className="thumb_content">{data.Content}</p>
             </div>
             <div className="EffectImage" style={{
              height:'15%',
              display:'flex',
              justifyContent:'center',
              alignItems:'center'}}>
              <img alt="arrow_right.png"
               style={{height:20}} 
               src={require(`../images/arrow_right.png`)}></img>
              </div>
      </div>
     })
     }
    </div>
    <div className="HomeBlogCardmOBILE">
    {ImageData.map((data,index)=>{
     return <div key={index.toString()} style={{width:'100%'}}>
        {(index===count||props.Loop)&&
            <>
            <div onClick={CallBlog}  key={index.toString()} className="CardStyle">
            <div   style={{height:'50%'}}>
            <img className="blog_thumb_image"  src={require(`../images/${data.Main}`)} alt={data.Main}></img>
            </div>
            <div  className="ChildThmub">
            <img className="blog_thumb"  src={require(`../images/${data.ChildImage}`)} alt={data.ChildImage}></img>
            </div>
            <div style={{height:'6rem',display:'flex',
            justifyContent:'center',
            marginLeft: '2rem',
            alignItems:'center',flexDirection:'row'}}>
            {!props.Loop&&
              <div>
              <div className="ButtonVlogStyle">
              {(index!==0)&&
                <NavigateBefore onClick={() => setCount(count-1)}  className="IconSTyle"/>
             }
              </div>
              </div>
            }
          
            <div  style={{width:'80%'}}>
          <p className="thumb_content">{data.Content}</p>
          </div>
          <div className="EffectImage" style={{
            height:'15%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'}}>
            <img alt="arrow_right.png"
             style={{height:20}} 
             src={require(`../images/arrow_right.png`)}></img>
            </div>
            {!props.Loop&&
              <div>
           <div className="ButtonVlogStyle">
           {(index!==3)&&
            <NavigateNext onClick={() => setCount(count+1)}  className="IconSTyle"/>
           }
          </div>
          </div>
            }

            </div>
          </div>
            </>
         }
           </div>
     })
     }
    </div>
    </div>
  )
}
export default BlogCard
