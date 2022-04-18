
import React,{Component} from 'react';
import './App.css';
import NavBar from './component/NavBar'
import Head from './component/Head'
import { Carousel } from 'antd';
import Content from './component/Content';
import Footer from './component/Footer';
import Featured from './component/Featured';
import Test from './component/Test';
class App extends Component{
  render(){
    return(
      <div>
        <NavBar></NavBar>
        <Carousel autoplay style={{marginBottom:"50px"}}>
          <div style={{position:"relative"}}>
            {/* <Head></Head> */}
            <div style={{height:"500px",backgroundImage: "url(https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/237000542_1998758883621030_3249071215044704968_n.png?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=8pU37YWwOHMAX9X0vkX&_nc_ht=scontent.fhan4-1.fna&oh=00_AT9_sUkajj1rJksaMxl-qoeSVZf4nFt37U79oyJLMVLvnQ&oe=62613C1A)",backgroundSize:"100% 100%"}} ></div>
          </div>
          <div style={{position:"relative"}}>
          {/* <Head></Head> */}
          <div style={{height:"500px",backgroundImage: "url(https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/237000542_1998758883621030_3249071215044704968_n.png?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=8pU37YWwOHMAX9X0vkX&_nc_ht=scontent.fhan4-1.fna&oh=00_AT9_sUkajj1rJksaMxl-qoeSVZf4nFt37U79oyJLMVLvnQ&oe=62613C1A)",backgroundSize:"100% 100%"}} ></div>
          </div>
          <div style={{position:"relative"}}>
          {/* <Head></Head> */}
          <div style={{height:"500px",backgroundImage: "url(https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/237000542_1998758883621030_3249071215044704968_n.png?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=8pU37YWwOHMAX9X0vkX&_nc_ht=scontent.fhan4-1.fna&oh=00_AT9_sUkajj1rJksaMxl-qoeSVZf4nFt37U79oyJLMVLvnQ&oe=62613C1A)",backgroundSize:"100% 100%"}} ></div>
          </div>
          <div style={{position:"relative"}}>
          {/* <Head></Head> */}
          <div style={{height:"500px",backgroundImage: "url(https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/237000542_1998758883621030_3249071215044704968_n.png?_nc_cat=105&ccb=1-5&_nc_sid=e3f864&_nc_ohc=8pU37YWwOHMAX9X0vkX&_nc_ht=scontent.fhan4-1.fna&oh=00_AT9_sUkajj1rJksaMxl-qoeSVZf4nFt37U79oyJLMVLvnQ&oe=62613C1A)",backgroundSize:"100% 100%"}} ></div>
          </div>
        </Carousel>,
        <Featured></Featured>
        <Test></Test>
        <Content></Content>
        <Footer></Footer>
      </div>
      );
  }
}

export default App;
