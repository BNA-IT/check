import React,{Component} from "react";
import '../Css/test.css'
class Test extends Component{
    render(){
        return(
            <div className="Content">
                <div className="img-content"></div>
                <div className="Content-title-1">
                    <div className="content-left"></div>
                    <div className="content-right">
                        <h3>Make your business more competitive<br></br>and sustainable.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br></br> incididunt ut labore et dolore magna aliqua.Influencing Sales</p>
                        <div className="flex-col">
                            <div className="col-box">
                                
                                <span> <i class="fa-solid fa-computer" style={{color:"blue"}}></i> Influencing Sales</span>
                            </div>
                            <div className="col-box">
                                <span><i class="fa-solid fa-computer" style={{color:"blue"}}></i> Generating Insights</span>
                            </div>
                            <div className="col-box">
                                <span><i class="fa-solid fa-computer" style={{color:"blue"}}></i> Engaging Customer</span>
                            </div>
                            <div className="col-box">
                                <span><i class="fa-solid fa-computer" style={{color:"blue"}}></i> Boosting Operations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Test