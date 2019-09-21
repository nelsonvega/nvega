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
                 <h6 className="Heading">Looking for a mentor & speaker ?</h6> 
               </div>
               <div>
                   <p className="fontstyledesc">
              Wheather you're hosting an event or looking for someone to help your team accelerate their performance, get in touch to learn more.
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
