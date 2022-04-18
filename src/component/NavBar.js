import React,{Component} from 'react';
import '../Css/Nav_Bar.css';
import { Menu, Dropdown, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
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
      <div className='nav' style={{display:"flex", alignItems:"center",height:"50px",marginTop:"20px",marginBottom:"35px"}}>
          <div>
              <h1>Rostek</h1>
          </div>
          <div>
              <ul style={{display:"flex"}}>
                  <li>Price</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Demo</li>
                  <li>Team</li>
                  <li>Blog</li>
                  <li>Demo</li>
                  <li>Demo</li>
                  <li>Demo</li>
              </ul>
          </div>
          <div style={{display:"flex",alignItems:"center"}}>
                <Dropdown overlay={menu} placement="bottom" arrow>
                <Button style={{border:"none",background:"#ffff",fontSize:"18px",fontWeight:"bold"}}>ENG</Button>
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
    );
  }
}

export default App;
