import React,{Component} from "react";
import '../Css/containers.css'
class Containers extends Component{
    render(){
        return(
            <div style={{display:"flex",width:"80%",justifyContent:"space-between",marginTop:"70px",background:"rgba(0, 0, 0, 0)",margin:"auto",position:"relative",zIndex:"2"}}>
                <div className="img"></div>
                <div className="Track">
                    <div className="row">
                        <h4><i class="fa-solid fa-microchip"></i> Handware</h4>
                        <p>Retrofit our IoT hardware (LTE or Wifi) to any <br></br>manufacturing device and start receiving efficiency<br></br> information. Meters, pieces and work time are<br></br> standard, anything else just ask</p>
                    </div>
                    <div className="row">
                    <h4><i class="fa-solid fa-bell"></i> Notification</h4>
                        <p>You’ll get instant notifications (SMS, e-mail) when<br></br> downtimes on machines occur. React faster to<br></br> problems on machine to gain availability</p>
                    </div>
                    <div className="row">
                    <h4><i class="fa-solid fa-gauge-high"></i> Smart Live View</h4>
                        <p>Real-time overview of productio<br></br>nequipment status / efficiency and work.<br></br>Can be viewed anywhere and from any device.<br></br> Use it on a Smart TV or phone/computer/tab for<br></br> quick efficiency or plan vs reality check-up</p>
                    </div>
                </div>
                <div className="Shopfloor">
                <div className="row">
                        <h4><i class="fa-solid fa-microchip"></i> Shopfloor feedback</h4>
                        <p>Collect data about downtime reasons, machine<br></br> operator and product being manufactured. Free<br></br> yourself of paper and excel sheets to reduce<br></br> mistakes in data collection</p>
                    </div>
                    <div className="row">
                    <h4><i class="fa-solid fa-bell"></i> Call for help</h4>
                        <p>Your machine operators can call for assistance without leaving the machine<br></br>„I need new material “<br></br>„Machine needs tech“<br></br>etc.<br></br>Messages between teams in the factory will reduce<br></br> your downtimes</p>
                    </div>
                    <div className="row">
                    <h4><i class="fa-solid fa-gauge-high"></i> Analytics</h4>
                        <p>OEE as key performance indicator. Analyze what<br></br> are the manufacturing efficiency losses and make<br></br> improvement plans for future</p>
                    </div>
                </div>
                <div className="Smart">
                <div className="row">
                        <h4><i class="fa-solid fa-microchip"></i> Production Planner</h4>
                        <p>Easy and comprehensive tool to plan your<br></br> production orders on workplaces. Create, change<br></br> and monitor your production plan which your<br></br> machine operators must follow. Get one step<br></br> closer to paperless manufacturing</p>
                    </div>
                    <div className="row">
                    <h4><i class="fa-solid fa-bell"></i> Maintenance</h4>
                        <p><p>Equipment maintenance and management tool.<br></br> Manage daily task of your maintenance workforce<br></br> and never again do maintenance on your key<br></br> machines based on a schedule, use the machines<br></br> worktime to plan maintenances. Meant for<br></br> factories to maintain all devices and infrastructure<br></br> but can be used independently in any industry.<br></br> On-time maintenance is the key to reducing<br></br> machine downtime</p></p>
                    </div>
                    <div className="row">
                    <h4><i class="fa-solid fa-gauge-high"></i> Smart Factory</h4>
                        <p>Retrofit our IoT hardware (LTE or Wifi) to any <br></br>manufacturing device and start receiving efficiency<br></br> information. Meters, pieces and work time are<br></br> standard, anything else just ask</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Containers