import TuitList from "../tuit-list";
import WhatsHappening from "../whatsHappening/whats-happening";
import './home.css';

const HomeScreen = () => {
    return(
        <div>
            <WhatsHappening/>
            <TuitList/>
        </div>
    )
}
export default HomeScreen;

