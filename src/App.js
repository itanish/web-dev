import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/tuiter/HomeScreen";
import ProfileScreen from "./components/tuiter/Profile";
import EditProfileScreen from "./components/tuiter/EditProfile";

function App() {
  return (

      <BrowserRouter>
          <div className="container">
              <Routes>

                  <Route path="/">
                      <Route index element={<Labs />} />
                      <Route path="labs"
                             element={<Labs/>}/>
                      <Route path="hello"
                             element={<HelloWorld/>}/>
                      <Route path="tuiter"
                             element={<Tuiter/>}>
                          <Route index
                                 element={<HomeScreen/>}/>
                          <Route path="explore"
                                 element={<ExploreScreen/>}/>
                          <Route path="profile"
                                 element={<ProfileScreen/>}/>
                          <Route path="edit-profile"
                                 element={<EditProfileScreen/>}/>

                          </Route>
                  </Route>

              </Routes>
          </div>
      </BrowserRouter>

  );
}
export default App;


