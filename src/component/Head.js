import React,{Component} from "react";
// import '../Css/head_Content.css'
class Head extends Component{
    render(){
        return(
            <div className="content">
                <div className="content-left-banner">
                    <h1 style={{color:"#ffffff"}}>Real-time factory tracker</h1>
                    <p>Our <span>software</span> & <span>hardware</span> solution gives you real-time information on your production capacity. Get <span>up to 30%</span> of profit with production effectiveness.</p>
                    <div style={{display:"flex"}}>
                        <div className="button-head">Request a demo</div>
                        <span style={{fontSize:"20px", lineHeight:"55px",marginLeft:"25px"}}></span>
                    </div>
                </div>
                <div className="content-right-banner"></div>
            </div>
        );
    }
}
export default Head