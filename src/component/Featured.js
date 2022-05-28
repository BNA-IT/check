import React,{Component} from "react";
// import '../Css/featured.css'
class Featured extends Component{
    render(){
        return(
            <div className="Featured">
                <div className="Featured-title">
                    <h2>How we work?</h2>
                    <p style={{fontSize:"14px",color:"#57647C"}}>We provide smart online manufacturing tools for SMEs. Using real-time data and team<br></br>collaboration tools, we help reduce downtime No more paperback reports!</p>
                </div>
                <div className="Feature-col">
                    <div className="col">
                        <div className="col-1"></div>
                        <h3>Install</h3>
                        <p>Subscription includes hardware and software that you can set up easily or we can schedule a visit of our technician.</p>
                    </div>
                    <div className="col">
                    <div className="col-2"></div>
                        <h3>Use</h3>
                        <p>Monitor production in real time and take action! Later analyse and improve your plans. GlobalReader collects data from your production and provides insight into why real performance is different from the production plan.</p>
                    </div>
                    <div className="col">
                    <div className="col-3"></div>
                        <h3>Customize</h3>
                        <p>If your requirements change, GlobalReader is able to change with you. Custom reports, custom production feedback and custom live views. Easily intregate with ERP systems!</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Featured