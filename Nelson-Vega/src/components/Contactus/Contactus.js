import React ,{useState} from 'react'
import SEO from '../../components/seo'
import ContactUSPopup from '../CotactUspop'
import './Contactus.css'
const Contactus = () => {
    const [Modal, ModalAction] = useState(false);
    const handleOpen = () => {
        ModalAction(true);
      };  
    return (
        <div className="ContactUSContainer" id="Contact">
            <ContactUSPopup Close={()=>ModalAction(false)} Open={Modal}/>
            <SEO title="Home" />
         <div className="BackGroundImageContact">
             <div style={{display:'flex',justifyContent:'center',alignItems: 'center'}}>
            <div className="ContentContcact">
               <div>
                 <h6 className="Heading">Looking For An Engineer?</h6> 
               </div>
               <div>
                   <p className="fontstyledesc">
              If you are someone who has an idea to start a digital product, or an established business looking forward to going online, or just someone who wishes to accelerate your team’s performance, I have a solution.
                   </p>
               </div>
               <div>
                  <button onClick={handleOpen} className="ButtonStyleContact">Get in touch</button>
                  
               </div>
               </div>
             </div>
        </div>
        </div>
    )
}

export default Contactus
