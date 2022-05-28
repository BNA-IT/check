import React,{Component} from "react";
// import '../Css/containers.css'
class Containers extends Component{
    render(){
        return(
            <div style={{width:"100%"}}> 
            <div className="containers-table">
                <div className="img"></div>
                <div className="Track">
                    <p style={{fontSize:"16px",fontWeight:"bold",color:"#B5B0C1",paddingLeft:"10px"}}>Track in real time</p>
                    <div className="row">
                        <h4><i class="fa-solid fa-microchip color-icon"></i> Handware</h4>
                        <p>Retrofit our IoT hardware (LTE or Wifi) to any manufacturing device and start receiving efficiency information. Meters, pieces and work time are standard, anything else just ask</p>
                    </div>
                    <div className="row">
                    <h4><i class="fa-solid fa-bell color-icon"></i> Notification</h4>
                        <p>You’ll get instant notifications (SMS, e-mail) when  downtimes on machines occur. React faster to  problems on machine to gain availability</p>
                    </div>
                    <div className="row">
                    <h4><i class="fa-solid fa-gauge-high color-icon"></i> Smart Live View</h4>
                        <p>Real-time overview of productio nequipment status / efficiency and work. Can be viewed anywhere and from any device.  Use it on a Smart TV or phone/computer/tab for  quick efficiency or plan vs reality check-up</p>
                    </div>
                </div>
                <div className="Shopfloor">
                <p style={{fontSize:"16px",fontWeight:"bold",color:"#B5B0C1",paddingLeft:"10px"}}>Shopfloor collaboration</p>
                <div className="row">
                        <h4><i class="fa-solid fa-microchip color-icon"></i> Shopfloor feedback</h4>
                        <p>Collect data about downtime reasons, machine  operator and product being manufactured. Free  yourself of paper and excel sheets to reduce  mistakes in data collection</p>
                    </div>
                    <div className="row">
                    <h4><i class="fa-solid fa-bell color-icon"></i> Call for help</h4>
                        <p>Your machine operators can call for assistance without leaving the machine<br></br>„I need new material “<br></br>„Machine needs tech“<br></br>etc. <br></br>Messages between teams in the factory will reduce  your downtimes</p>
                    </div>
                    <div className="row">
                    <h4><i class="fa-solid fa-gauge-high color-icon"></i> Analytics</h4>
                        <p>OEE as key performance indicator. Analyze what  are the manufacturing efficiency losses and make  improvement plans for future</p>
                    </div>
                </div>
                <div className="Smart">
                <p style={{fontSize:"16px",fontWeight:"bold",color:"#B5B0C1",paddingLeft:"10px"}}>
Smart factory management</p>
                <div className="row">
                        <h4><i class="fa-solid fa-microchip color-icon"></i> Production Planner</h4>
                        <p>Easy and comprehensive tool to plan your  production orders on workplaces. Create, change  and monitor your production plan which your  machine operators must follow. Get one step  closer to paperless manufacturing</p>
                    </div>
                    <div className="row">
                    <h4><i class="fa-solid fa-bell color-icon"></i> Maintenance</h4>
                        <p><p>Equipment maintenance and management tool.  Manage daily task of your maintenance workforce  and never again do maintenance on your key  machines based on a schedule, use the machines  worktime to plan maintenances. Meant for  factories to maintain all devices and infrastructure  but can be used independently in any industry.  On-time maintenance is the key to reducing  machine downtime</p></p>
                    </div>
                    <div className="row">
                    <h4><i class="fa-solid fa-gauge-high color-icon"></i> Smart Factory</h4>
                        <p>Retrofit our IoT hardware (LTE or Wifi) to any  manufacturing device and start receiving efficiency  information. Meters, pieces and work time are  standard, anything else just ask</p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Containers