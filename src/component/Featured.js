import React,{Component} from "react";
import '../Css/featured.css'
class Featured extends Component{
    render(){
        return(
            <div className="Featured">
                <div className="Featured-title">
                    <h2>Our featured solutions</h2>
                    <p style={{fontSize:"14px",color:"#57647C"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br> tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="Feature-col">
                    <div className="col">
                        <div className="col-1"></div>
                        <h3>Departments</h3>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus<br></br> commodo viverra maecenas accumsan lacus vel<br></br> adipiscing aliqua.</p>
                    </div>
                    <div className="col">
                    <div className="col-2"></div>
                        <h3>Industries</h3>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus<br></br> commodo viverra maecenas accumsan lacus vel<br></br> adipiscing aliqua.</p>
                    </div>
                    <div className="col">
                    <div className="col-3"></div>
                        <h3>Technology</h3>
                        <p>Quis ipsum suspendisse ultrices gravida. Risus<br></br> commodo viverra maecenas accumsan lacus vel<br></br> adipiscing aliqua.</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Featured