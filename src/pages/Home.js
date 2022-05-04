import Banner from "../component/Banner";
import NavBar from "../component/NavBar";
import Featured from "../component/Featured";
import Test from "../component/Test";
import Content from "../component/Content";
import Footer from "../component/Footer";
function Home(){
    return(
        <div>
            <NavBar></NavBar>
            <Banner/>
            <Featured></Featured>
            <Test></Test>
            <Content></Content>
            <Footer></Footer>
        </div>
    );
}
export default Home;