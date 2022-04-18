import React,{Component} from "react";
import '../Css/head_Content.css'
class Head extends Component{
    render(){
        return(
            <div className="content">
                <div className="content-left">
                    <h1>Real-time factory tracker</h1>
                    <p>Our <span>software</span> & <span>hardware</span> solution gives you real-time<br></br> information on your production capacity. Get <span>up to 30%</span><br></br> of profit with production effectiveness.</p>
                    <div style={{display:"flex"}}>
                        <div className="button-head">Request a demo</div>
                        <span style={{fontSize:"20px", lineHeight:"55px",marginLeft:"25px"}}>Learn more</span>
                    </div>
                </div>
                <div className="content-right">
                    {/* <img src="https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1515745362930-J9PN1Z1KYTRG7RRZXE2R/ai-integration.jpg?format=2500w" style={{height:"300px", borderRadius:"10px"}}></img> */}
                </div>
            </div>
        );
    }
}
export default Head