import React,{ useState, useEffect }  from "react"
import Button from '@material-ui/core/Button';
const Header = ({ siteTitle,Scroll,ScrollID}) => {
  const OpenLink=()=>{
    window.open("http://advanceautoworld.ca");
   }
  console.info(ScrollID)
  const UpdateScroll=(data)=>{
    Scroll(data)
    let Des=document.getElementById('container')
    let mydiv=document.getElementById('mydiv')
    console.info(Des,mydiv)
    if(mydiv){
      mydiv.style.display = "none";
      setShowMenu(ShowMenu=!ShowMenu)
      Des.classList.toggle("change")
    }
  }
  const [scrollY, setScrollY] = useState('ClassOne');
  let [ShowMenu, setShowMenu] = useState(false);
  const MenuFxn=(e)=>{
   e.currentTarget.classList.toggle("change");
   setShowMenu(ShowMenu=!ShowMenu)
  }
  const MenuData=['Home','About','My Work','Vlog','Blog','Contact']
  const LogoImagedata=['facebook.png','twitter.png','youtube.png','insta.png']
  const logit=()=> {
    if(ScrollID){
    let sticky = document.getElementById(ScrollID).offsetTop;
    console.info(sticky)
    if (window.pageYOffset  > sticky) {
      setScrollY('ClassTwo');
      let TitleStyle= document.getElementById('Title').style;
      TitleStyle.fontSize='3rem';
      TitleStyle.transition= 'all 0.3s ease-out';
    }else{
      setScrollY('ClassOne');
     let TitleStyle= document.getElementById('Title').style;
     TitleStyle.fontSize='4.5rem';
     TitleStyle.transition= 'all 0.3s ease-out';
    }
  }
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });
  console.info(scrollY)
 return <header  className={scrollY}>
<div className="HeaderContainer">
  <div className="HeaderLogoStyle" id="Title">{siteTitle}</div>
  <div className="HeaderMenu">
  {MenuData.map(data=>{
    return <Button key={data}  onClick={(e)=>{ UpdateScroll(data)}} style={style.MenuStyle}>{data}</Button>
  })}
  <div style={style.MenuLogoStyle}>
  {LogoImagedata.map(ImageData=>{
    return <img onClick={OpenLink} key={ImageData} alt={ImageData} style={{width:'25px',height:'25px',cursor:'pointer'}} src={require(`../images/${ImageData}`)}></img>
  })}
  </div>
  </div>
  <div className="ToggleMenu">
  <div id="containermain" className="containermain" onClick={MenuFxn}>
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>
</div>
  </div>
</div>
{ShowMenu&&
<div id="mydiv" className="ToggleMenuMobile" style={{
  flexDirection:'column',height:'75vh',
  padding:0,
  width:'100%',background:'black',justifyContent:'center'}}>
  <div style={style.ToggleMenuStyle}>
{MenuData.map(data=>{
  return <Button key={data}  onClick={(e)=>{UpdateScroll(data)}} style={style.MenuStyleToogle}>{data}</Button>
})}
  </div>
  <div style={{height:'20%',
  alignItems:'center',
  display:'flex',justifyContent: 'space-evenly'
  ,width:'100%',
  flexDirection:'row'}}>
  {LogoImagedata.map(ImageData=>{
    return <img onClick={OpenLink} key={ImageData} alt={ImageData} style={{width:'25px',height:'25px',cursor:'pointer'}} src={require(`../images/${ImageData}`)}></img>
  })}
  </div>
</div>
}
   </header>
}
const style={
  MenuLogoStyle:{
    display: 'flex',
    width:'25%',
    justifyContent: 'space-evenly'
  },
  ToggleMenuStyle:{
    height:'85%',display:'flex',
    justifyContent:'space-evenly',
    alignItems: 'center',
    flexDirection:'column',width:'100%'
  },
  MenuStyle:{
    fontWeight:'bold',
    margin: '0',
    color:'white',
    fontSize:'1.5rem'
  },
  MenuStyleToogle:{
    fontWeight:'bold',
    color:'white',
    fontSize:'1.5rem'
  }
  
}
export default Header

