
import React,{Component} from 'react';
import NavBar from './component/NavBar'
import Head from './component/Head'
import { Carousel } from 'antd';
import Content from './component/Content';
import Footer from './component/Footer';
import Featured from './component/Featured';
import Test from './component/Test';
import Banner from './component/Banner';
import Price from './component/Price';
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <Price></Price>
      </div>
      );
  }
}

export default App;
