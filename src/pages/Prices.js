import Banner from "../component/Banner";
import NavBar from "../component/NavBar";
import Featured from "../component/Featured";
import Test from "../component/Test";
import Content from "../component/Content";
import Footer from "../component/Footer";
import Price from "../component/Price";
function Prices(){
    return(
        <div>
            <NavBar></NavBar>
            <Banner/>
           <Price></Price>
        </div>
    );
}
export default Prices;