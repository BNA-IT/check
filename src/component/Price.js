import React,{Component} from "react";
import '../Css/price.css'
import{useState, useEffect} from "react"
import { Switch } from 'antd';
function Price(){
    const [tongMany,setMany] = useState(1);
    const[resultTmp,setCheckResultTmp] = useState(608);
    const[result,setCheckResult] = useState(608);
    const handelCong = () => {
        setMany(prev=>{
            return prev + 1;
        })
    }
    const handelTru = () => {
        setMany(prev=>{
            if(prev == 1) return 1;
            return prev - 1;
        })
    }
    useEffect(() => {
        setCheckResult(resultTmp * tongMany);
    },[tongMany,resultTmp]);
    useEffect(()=>{
        window.onscroll = function() {myFunction()};
        let head = document.getElementById("top");
        let lead2 = document.getElementById("bottom");
        let Bottom = lead2.offsetTop-325;
        let Top = head.offsetTop;
        console.log("top: ",Top);
        console.log("bot",Bottom);
        function myFunction() {
            if (window.pageYOffset > Top && window.pageYOffset < Bottom) {
                head.classList.add("sticky");
            } else {
                head.classList.remove("sticky");
            }
        }
    },[])
    function onChange(checked) {
        console.log(`switch to ${checked}`);
    }
    function onChangeNotification(checked) {
    //    if(checked){
    //         setCheckResult(prev => prev + 12);
    //    }
    //    else{
    //     setCheckResult(prev => prev - 12);
    //    }
    }
    function onChangeShopfloor(checked) {
        if(checked){
            setCheckResultTmp(prev => prev + 200);
        }
        else{
            setCheckResultTmp(prev => prev - 200);
        }
     }
     function onChangeSmart(checked) {
        if(checked){
            setCheckResultTmp(prev => prev + 80);
        }
        else{
            setCheckResultTmp(prev => prev - 80);
        }
     }
     function onChangeCall(checked) {
        if(checked){
            setCheckResultTmp(prev => prev + 30);
        }
        else{
            setCheckResultTmp(prev => prev - 30);
        }
     }
     function onChangeProduction(checked) {
        if(checked){
            setCheckResultTmp(prev => prev + 120);
        }
        else{
            setCheckResultTmp(prev => prev - 120);
        }
     }
     function onChangeMaintenance(checked) {
        if(checked){
            setCheckResultTmp(prev => prev + 42);
        }
        else{
            setCheckResultTmp(prev => prev - 42);
        }
     }
     function onChangeSmartFactory(checked) {
        if(checked){
            setCheckResultTmp(prev => prev + 50);
        }
        else{
            setCheckResultTmp(prev => prev - 50);
        }
     }
        return(
            <div>
                <div className="table">
                    <div className="table-row-1">
                        <div style={{display:"flex", alignItems:"center",justifyContent:"center"}}>
                            <button onClick={handelTru} style={{border:"none",background:"#25487B",color:"#ffffff",fontWeight:"bold",fontSize:"40px"}}>-</button>
                            <div id="tong-many" style={{width:"85px",background:"#ffffff",color:"#25487B", textAlign:"center",borderRadius:"8px", fontWeight:"bold"}}>{tongMany}</div>
                            <button onClick={handelCong} style={{border:"none",background:"#25487B",color:"#ffffff",fontWeight:"bold",fontSize:"40px"}}>+</button>
                        </div>
                    </div>
                </div>
                <div className="table-2">
                    <div className="table-row-2">
                        <div className="flex-box">
                            <div className="table-row-2-1">
                                <div className="padding-style-row-2-1">
                                    <font-letter>Main</font-letter>
                                    <small>First you can choose how many blackbox'is you need (how many machines you have to monitor)</small>
                                </div>

                            </div>
                            <div className="table-row-2-2">
                                <div className="padding-style-row-2-2 check-hidden">
                                    <font-letter>Price</font-letter>
                                </div>
                            </div>

                        </div>
                        <div className="flex-box">
                            <div className="table-row-2-1">
                                <div className="padding-style-row-2-1">
                                        <h4><i class="fa-solid fa-circle-exclamation"></i> Hardware + Analytics</h4>
                                </div>

                            </div>
                            <div className="table-row-2-2">
                                <div className="padding-style-row-2-2">
                                    <div className="price">86</div>
                                    <div className="currency">$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-box">
                            <div className="table-row-2-1">
                                <div className="padding-style-row-2-1">
                                    <font-letter>Features</font-letter>
                                    <small>Customize your blackbox to get more data from your production</small>
                                </div>

                            </div>
                            <div className="table-row-2-2">
                                <div className="padding-style-row-2-2">
                                    
                                </div>
                            </div>

                        </div>
                        <div className="flex-box">
                            <div className="table-row-2-1">
                                <div className="padding-style-row-2-1 padding-flex">
                                            <h4> <i class="fa-solid fa-circle-exclamation"></i> Notification</h4>
                                        <Switch defaultChecked onChange={onChangeNotification} />
                                </div>

                            </div>
                            <div className="table-row-2-2">
                                <div className="padding-style-row-2-2">
                                    <div className="price">Included</div>
                                    {/* <div className="currency">$</div> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex-box">
                            <div className="table-row-2-1">
                                <div className="padding-style-row-2-1 padding-flex">
                                            <h4> <i class="fa-solid fa-circle-exclamation"></i> Shopfloor feedback</h4>
                                        <Switch defaultChecked onChange={onChangeShopfloor} />
                                </div>

                            </div>
                            <div className="table-row-2-2">
                                <div className="padding-style-row-2-2">
                                    <div className="price">200</div>
                                    <div className="currency">$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-box">
                            <div className="table-row-2-1">
                                <div className="padding-style-row-2-1 padding-flex">
                                            <h4> <i class="fa-solid fa-circle-exclamation"></i> Smart Live View</h4>
                                        <Switch defaultChecked onChange={onChangeSmart} />
                                </div>

                            </div>
                            <div className="table-row-2-2">
                                <div className="padding-style-row-2-2">
                                    <div className="price">80</div>
                                    <div className="currency">$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-box">
                            <div className="table-row-2-1">
                                <div className="padding-style-row-2-1 padding-flex">
                                            <h4> <i class="fa-solid fa-circle-exclamation"></i> Call for help</h4>
                                        <Switch defaultChecked onChange={onChangeCall} />
                                </div>

                            </div>
                            <div className="table-row-2-2">
                                <div className="padding-style-row-2-2">
                                    <div className="price">30</div>
                                    <div className="currency">$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-box">
                            <div className="table-row-2-1">
                                <div className="padding-style-row-2-1 padding-flex">
                                            <h4> <i class="fa-solid fa-circle-exclamation"></i> Production planner</h4>
                                        <Switch defaultChecked onChange={onChangeProduction} />
                                </div>

                            </div>
                            <div className="table-row-2-2">
                                <div className="padding-style-row-2-2">
                                    <div className="price">120</div>
                                    <div className="currency">$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-box">
                            <div className="table-row-2-1">
                                <div className="padding-style-row-2-1 padding-flex">
                                            <h4> <i class="fa-solid fa-circle-exclamation"></i> Maintenance</h4>
                                        <Switch defaultChecked onChange={onChangeMaintenance} />
                                </div>

                            </div>
                            <div className="table-row-2-2">
                                <div className="padding-style-row-2-2">
                                    <div className="price">42</div>
                                    <div className="currency">$</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-box">
                            <div className="table-row-2-1">
                                <div className="padding-style-row-2-1 padding-flex">
                                            <h4> <i class="fa-solid fa-circle-exclamation"></i> Smart Factory</h4>
                                        <Switch defaultChecked onChange={onChangeSmartFactory} />
                                </div>

                            </div>
                            <div className="table-row-2-2">
                                <div className="padding-style-row-2-2">
                                    <div className="price">50</div>
                                    <div className="currency">$</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-row-3" id="top" style={{background:"#F5F8FD"}}>
                        <ul style={{display:"flex"}}>
                            <li style={{listStyleType:"none", marginRight:"70px",textAlign:"center"}}>
                                <font-letter>One time payment</font-letter>
                                <div className="price" style={{fontSize:"30px"}}>0$</div>
                            </li>
                            <li style={{listStyleType:"none",textAlign:"center"}}>
                                <font-letter>Monthly fee</font-letter>
                                <div className="price" style={{fontSize:"30px"}}>{result}$</div>
                            </li>
                        </ul>
                        <div style={{marginTop:"20px"}}>
                            <small>ROI is calculated as the average of 3 months and with 3 devices</small>
                        </div>
                        <div style={{marginTop:"20px"}}> 
                            <font-letter>Efficiency monthly</font-letter>
                        </div>
                        <div>
                            <ul>
                                <li style={{display:"flex",justifyContent:"space-between"}}>
                                    <h4>AVERAGE GROWTH</h4>
                                    <h4>25%</h4>
                                </li>
                                <li style={{display:"flex",justifyContent:"space-between"}}>
                                    <h4>ROI</h4>
                                    <h4>3000$</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="bottom"></div>                
            </div>
        );
}
export default Price