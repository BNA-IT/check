import React,{Component} from "react";
import '../Css/footer.css'
class Footer extends Component{
    render(){
        return(
            <div className="Footer-content">
                <div className="Footer-left">
                    <p style={{fontWeight:"bold"}}>Get in touch</p>
                    <h3>Please contact us if you want more information<br></br> about our solutions</h3>
                    <p style={{lineHeight:"8px"}}>+84123456789</p>
                    <p>Rosteck.com.vn</p>
                </div>
                <div className="Footer-mid"></div>
                <div className="Footer-right"></div>
            </div>
        );
    }
}
export default Footer