import React from 'react'
import SEO from '../../components/seo'
import './Contactus.css'
const Contactus = () => {
    return (
        <div className="ContactUSContainer" id="Contact">
            <SEO title="Home" />
         <div className="BackGroundImageContact">
             <div style={{display:'flex',justifyContent:'center',alignItems: 'center'}}>
            <div className="ContentContcact">
               <div>
                 <h6 className="Heading">Looking for a mentor & speaker ?</h6> 
               </div>
               <div>
                   <p className="fontstyledesc">
              Wheather you're hosting an event or looking for someone to help your team accelerate their performance, get in touch to learn more.
                   </p>
               </div>
               <div>
                  <button className="ButtonStyleContact">Get in touch</button>
               </div>
               </div>
             </div>
        </div>
        </div>
    )
}

export default Contactus
