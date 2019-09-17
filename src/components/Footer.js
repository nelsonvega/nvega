import React from 'react'
const Footer = () => {
  return (
    <div style={style.footer}>
      <div style={style.ContentFooter}>
      <p className="FooterStyle">
      2019 Nelsone Vegas All Rights Reserved. 
      Privacy Policy | Terms and Conditions
      </p>
      </div>
    </div>
  )
}
const style={
footer:{
    height: '25vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#000'
},
ContentFooter:{
    height: '10vh',
    width: '100%',
    backgroundColor: '#262626',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
}
}
export default Footer
