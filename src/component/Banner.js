import React,{Component} from "react";
import '../Css/banner.css'
import Head from "./Head";
class Banner extends Component{
    render(){
        return(
            <div className="main-banner">
                <div className="insert-banner"></div>
                <Head></Head>
                <div className="insert-animation-banner"></div>
            </div>
        );
    }
}
export default Banner