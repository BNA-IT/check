import React,{Component} from 'react';
import '../Css/Nav_Bar.css';
import { Menu, Dropdown, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        VN
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        China
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Test
      </a>
    </Menu.Item>
  </Menu>
);
class App extends Component{
  render(){
    return(
      <div className='nav' style={{display:"flex", alignItems:"center",height:"50px",background:"#25487B",color:"#ffffff",justifyContent:"space-between",paddingTop:"20px",position:"relative",zIndex:"9999",padding:"0px 5%"}}>
        <div style={{display:"flex",alignItems:"center"}}>
          <div className='img-navbar'></div>
          <div>
              <ul style={{display:"flex", margin:"0",padding:"0"}}>
                  <li><Link to='/' style={{color:"#ffffff"}}>Home</Link></li>
                  <li><Link to='/Prices' style={{color:"#ffffff"}}>Prices</Link></li>
                  <li><Link to='/Calculator' style={{color:"#ffffff"}}>Calculator</Link></li>
              </ul>
          </div>
        </div>
          <div style={{display:"flex"}}>
            <div style={{display:"flex",alignItems:"center"}}>
                  <Dropdown overlay={menu} placement="bottom" arrow>
                  <Button style={{border:"none",background:"#25487B",fontSize:"18px",fontWeight:"bold",color:"#ffffff"}}>ENG</Button>
                  </Dropdown>
                  <div className='button-nav'>Oder now</div>
            </div>
            <div className='login-nav'>
                <UserOutlined style={{fontSize:"18px",marginRight:"15px"}} />
                <div>
                <p>Login</p>

                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
