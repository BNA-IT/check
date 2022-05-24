import Banner from "../component/Banner";
import NavBar from "../component/NavBar";
import Featured from "../component/Featured";
import Test from "../component/Test";
import Content from "../component/Content";
import Footer from "../component/Footer";
import Form from "../component/Form";
import Check from "../component/Check";
import Cal from "../component/Cal";
function Home(){
    return(
        <div>
            <NavBar></NavBar>
            <Banner/>
            <Featured></Featured>
            <Test></Test>
            <Content></Content>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
}
export default Home;