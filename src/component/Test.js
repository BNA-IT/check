import React,{Component} from "react";
import '../Css/test.css'
class Test extends Component{
    render(){
        return(
            <div className= "Content-main">
                <div className="Content-title-1">
                <div className="img-content-1"></div>
                    <div className="content-left-1"></div>
                    <div className="content-right">
                        <h3>Every production can do more with data</h3>
                        <p>Rostek collects data from your production and provides insight into why real performance is different from the production plan. Bring decision-making from planning to real-time.You’ll get instant notifications when interruptions and downtimes occur.</p>
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
                <div className="Content-title-2">
                <div className="img-content-2"></div>
                    <div className="content-right">
                        <h3>Remove clutter from your production</h3>
                        <p>Implement the most comprehensive production data exchange software solution. No more<br></br> paperback reports!</p>
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
                    <div className="content-left-2"></div>
                </div>

            </div>
        );
    }
}
export default Test