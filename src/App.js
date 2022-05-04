
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
import Home from './pages/Home';
import Prices from './pages/Prices';
import './App.css';
import { Routes,Route } from 'react-router-dom';
class App extends Component{
  render(){
    return(
      <div>
        <Routes>
          <Route path='/' element = {<Home></Home>}></Route>
          <Route path='/Prices' element = {<Prices></Prices>}></Route>
        </Routes>
      </div>
      );
  }
}

export default App;
