import React from 'react'
import './GraphMywork.css'

const GraphMywork = () => {
    const OpenLink=()=>{
        window.open("https://www.google.com/");
    }
  return (
    <div>
    <div className="col-md-12">
    <div className="grpah_section d-none d-lg-block">
        <div className="outer_graph_desktop">
           
            <div onClick={OpenLink} className="circle_common circle1">
            <div className="circle1-text">
                <p className="headone">Business Start</p>
                <p className="contentone">Lorem ipsum is simply dummy text pf the printing</p>
            </div>
            </div>
            
            <div onClick={OpenLink} className="circle_common circle2">
            <div className="circle2-text">
                <p className="headone book">Mannual Book</p>
                <p className="contentone">Lorem ipsum is simply dummy text pf the printing</p>
            </div>
            </div>
            
            <div onClick={OpenLink} className="circle_common circle3">
            <div className="circle3-text">
                <p className="headone fast_services">Fast Services</p>
                <p className="contentone">Lorem ipsum is simply dummy text pf the printing</p>
            </div>
            </div>
            
            <div onClick={OpenLink} className="circle_common circle4">
            <div className="circle4-text">
                <p className="headone data_client">Data Client</p>
                <p className="contentone">Lorem ipsum is simply dummy text pf the printing</p>
            </div>
            </div>
            
            <div onClick={OpenLink} className="circle_common circle5">
            <div className="circle5-text">
                <p className="headone sales_formula">Sales Formula</p>
                <p className="contentone">Lorem ipsum is simply dummy text pf the printing</p>
            </div>
            </div>
            
            <div onClick={OpenLink} className="circle_common circle6">
            <div className="circle6-text">
                <p className="headone success_last">Success</p>
                <p className="contentone">Lorem ipsum is simply dummy text pf the printing</p>
            </div>
            </div>
            
        </div>
    </div>
</div>
    </div>
  )
}

export default GraphMywork
