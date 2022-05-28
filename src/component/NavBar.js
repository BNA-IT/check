import React,{Component} from 'react';
// import '../Css/Nav_Bar.css';
import { Menu, Dropdown, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import  Link from 'next/link';
import { useEffect } from 'react';
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/a">
        VN
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/b">
        China
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/c">
        Test
      </a>
    </Menu.Item>
  </Menu>
);
function Nav(){
  useEffect(()=>{
    console.log(document.getElementById("mySidenav"));
    // const openNav = ()=>{

    // }

    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      console.log("dabam");
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  },[])
    return(
      <div>
        <div id="mySidenav" class="sidenav">
              {/* <Link href="javascript:void(0)" class="closebtn" onClick={()=>{document.getElementById("mySidenav").style.width = "0px";}}>&times;</Link> */}
              {/* <li style={{listStyleType:"none",marginLeft:"40px",marginBottom:"18px"}}><Link to='/' style={{color:"#244C95",fontSize:"20px",fontWeight:"bold",marginBottom:"20px"}}>Home</Link></li>
              <li style={{listStyleType:"none",marginLeft:"40px",marginBottom:"18px"}}><Link to='/Prices' style={{color:"#244C95",fontSize:"20px",fontWeight:"bold",marginBottom:"20px"}}>Prices</Link></li>
              <li style={{listStyleType:"none",marginLeft:"40px",marginBottom:"18px"}}><Link to='/Calculator' style={{color:"#244C95",fontSize:"20px",fontWeight:"bold",marginBottom:"20px"}}>Calculator</Link></li> */}
        </div>
        <div className='nav' style={{display:"flex", alignItems:"center",height:"50px",background:"#25487B",color:"#ffffff",justifyContent:"space-between",paddingTop:"20px",position:"relative",zIndex:"9999",padding:"0px 5%"}}>
          <div style={{display:"flex",alignItems:"center"}}>
            <div className='img-navbar'></div>
            <div className='nav-pc'>
                <ul style={{display:"flex", margin:"0",padding:"0"}}>
                    {/* <li><Link href='/' style={{color:"#ffffff"}}><a>Home</a></Link></li>
                    <li><Link href='/Prices' style={{color:"#ffffff"}}><a>Prices</a></Link></li>
                    <li><Link href='/Calculator' style={{color:"#ffffff"}}><a>Calculator</a></Link></li> */}
                </ul>
            </div>
          </div>
            <div className='pc-navbar'>
              <div className="pc-eng nav-pc">
                    <Dropdown overlay={menu} placement="bottom" arrow>
                    <Button style={{border:"none",background:"#25487B",fontSize:"18px",fontWeight:"bold",color:"#ffffff"}}>ENG</Button>
                    </Dropdown>
                    <div className='button-nav'>Oder now</div>
              </div>
              <div className='login-nav'>
                  <a href='https://login.rosoee.com/login'>
                    <UserOutlined style={{fontSize:"18px",marginRight:"15px",color:"#ffffffgit "}} />
                  </a>
                  <div>
                  <p></p>

                  </div>
              </div>
            <span className='nav-mobi' onClick={()=>{document.getElementById("mySidenav").style.width = "250px";}}>&#9776;</span>
            </div>
        </div>
      </div>
    );
}

export default Nav;
