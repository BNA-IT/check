import React,{Component} from "react";
import{useState, useEffect} from "react"
import { Slider, InputNumber, Row, Col } from 'antd';
// import '../Css/cal.scss'
// import '../Css/cals.css'
function Cal (){
    const [inputValue, setInputValue] = useState(1);
    const onChange = (newValue) => {
    setInputValue(newValue);
  };
        return(
                <div>
                    <div id="form-wrapper" style={{display:"flex", margin:"auto"}}>
                        <form action="" method="GET">
                            {/* <h1 id="form-title">Select Debt Amount</h1> */}
                            <p style={{fontWeight:"boldu"}}>Production days per week</p>
                            <div id="debt-amount-slider">
                                <input type="radio" name="debt-amount" id="1" value="1" required/>
                                <label for="1" data-debt-amount="1"></label>
                                <input type="radio" name="debt-amount" id="2" value="2" required/>
                                <label for="2" data-debt-amount="2"></label>
                                <input type="radio" name="debt-amount" id="3" value="3" required/>
                                <label for="3" data-debt-amount="3"></label>
                                <input type="radio" name="debt-amount" id="4" value="4" require/>
                                <label for="4" data-debt-amount="4"></label>
                                <input type="radio" name="debt-amount" id="5" value="5" require/>
                                <label for="5" data-debt-amount="5"></label>
                                <input type="radio" name="debt-amount" id="6" value="6" require/>
                                <label for="6" data-debt-amount="6"></label>
                                <input type="radio" name="debt-amount" id="7" value="7" require/>
                                <label for="7" data-debt-amount="7"></label>
                                <div id="debt-amount-pos"></div>
                            </div>
                        </form>
                        <div className = "width-day">
                            <p style={{fontWeight:"boldu"}}>Working hours per day</p>
                            <Col span={12}>
                                <Slider
                                min={1}
                                max={24}
                                onChange={onChange}
                                value={typeof inputValue === 'number' ? inputValue : 0}
                                className = "day-slide"
                                />
                            </Col>
                            <Col span={4}>
                                <InputNumber
                                min={1}
                                max={24}
                                style={{ margin: '0 16px' }}
                                value={inputValue}
                                onChange={onChange}
                                />
                            </Col>
                        </div>
                            <div className="number-cal">
                                <div style={{width:"90px"}}>
                                    <p style={{fontSize:"14px", lineHeight:"14px", fontWeight:"bold"}}>Number of machines</p>
                                    <input className="inp-left box"/>
                                </div>
                                <div  style={{width:"120px"}}>
                                <p style={{fontSize:"14px", lineHeight:"14px", fontWeight:"bold"}}>Average Billing Rate, per Hour </p>
                                    <input className="inp-right box"/>
                                </div>
                            </div>
                            <div className="email-cal">
                                <div><label>EMAIL</label></div>
                                <input style={{width:"100%", height:"40px"}}></input>
                            </div>
                        <button type="submit" style={{background:"#244C95", padding:"20px 65px", borderRadius:"10px",color:"#ffffff", border:"none",fontSize:"16px",fontWeight:"bold"}}>SEE RESULT</button>  
                    </div>
                   
                </div>
        );
}
export default Cal;