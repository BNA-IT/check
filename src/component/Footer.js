import React,{Component} from "react";
// import '../Css/footer.css'
class Footer extends Component{
    render(){
        return(
            <div class="content-7">
        <div class="footer">
            <div className="insert-footer-1"></div>
            <div className="insert-footer-2"></div>
            <div class="footer-1">
                <div class="bg-footer"></div>
                    <p>Address: 973 Giải Phóng - Hà Nội</p>
                    <p>Phone: 0123456789</p>
                    <p>Email: rostek@gmail.com</p>
            </div>
            <div class="footer-2">
                <h4>Usefull Links</h4>
                <ul>
                    <li>About Us</li>
                    <li>Who are you</li>
                    <li>Contact</li>
                    <li>Our Sitemap</li>
                    <li>Testmonials</li>
                    <li>Projects</li>
                </ul>
            </div>
            <div class="footer-3">
                <a style={{color:"black"}} href="https://www.facebook.com/rostek.com.vn">
                    <div class="vong-tron"><i class="fa-brands fa-facebook-f chinh"></i></div>
                </a>
                <div class="vong-tron"><i class="fa-brands fa-youtube chinh"></i></div>
                <div class="vong-tron"><i class="fa-brands fa-twitter chinh"></i></div>
                <div class="vong-tron"><i class="fa-brands fa-pinterest-p chinh"></i></div>
            </div>
        </div>
        <div class="footer-withlove">
            <div class="vector-3"></div>
            <p style={{color:"#ffffff",marginTop:"20px"}}> Copyright ©2022 All rights reserved | This template is made with  by <a href="https://www.facebook.com/rostek.com.vn" style={{color:"#ffffff"}}>Rostek</a></p>
        </div>
        
    </div>
        );
    }
}
export default Footer