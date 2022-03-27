import React from "react";
import '../../../vendors/fontawesome/css/all.min.css';
import './navigation.css'
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavigationSidebar = ({
                               active = 'home'
                           }) => {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    if (splitLocation.length > 2 && splitLocation[2] !== "") {
        active = splitLocation[2];
    }

    return(
        <>
        <ul className="list-group">
            <Link to="/">
            <li className="list-group-item" aria-current="true">
          <i className="fa-brands fa-twitter wd-text-white" aria-hidden="true"></i>
        </li>
            </Link>

            <Link to="/tuiter"
                  className="wd-nav-link">

           <li className={`list-group-item
        ${active === 'home' ? 'active' : ''}`}>
          <span className="d-inline"><i className="fa-solid fa-house wd-text-white" aria-hidden="true"></i></span>
          <span className="d-none d-xl-inline wd-text-white"> Home</span>
        </li>
            </Link>

            <Link to="/tuiter/explore"
                  className="wd-nav-link">

                <li className={`list-group-item
        ${active === 'explore' ? 'active' : ''}`}>
          <span className="d-inline"><i className="fa-solid fa-hashtag wd-text-white" aria-hidden="true"></i></span>
          <span className="d-none d-xl-inline wd-text-white"> Explore</span>
        </li>
            </Link>
        
        <li className="list-group-item">
          <span className="d-inline"><i className="fa-solid fa-bell wd-text-white" aria-hidden="true"></i></span>
          <span className="d-none d-xl-inline wd-text-white"> Notifications</span>
        </li>
        <li className="list-group-item">
          <span className="d-inline"><i className="fa-solid fa-envelope wd-text-white" aria-hidden="true"></i></span>
          <span className="d-none d-xl-inline wd-text-white"> Messages</span>
        </li>
        <li className="list-group-item">
          <span className="d-inline"><i className="fa-solid fa-bookmark wd-text-white" aria-hidden="true"></i></span>
          <span className="d-none d-xl-inline wd-text-white"> Bookmarks</span>
        </li>
        <li className="list-group-item">
          <span className="d-inline"><i className="fa-solid fa-list wd-text-white" aria-hidden="true"></i></span>
          <span className="d-none d-xl-inline wd-text-white"> Lists</span>
        </li>
            <NavLink to="/tuiter/profile" activeClassName='active'
                  className="wd-nav-link">
                <li className={`list-group-item
        ${active === 'profile' ? 'active' : ''}`}>
          <span className="d-inline"><i className="fa-solid  fa-user wd-text-white" aria-hidden="true"></i></span>
          <span className="d-none d-xl-inline wd-text-white"> Profile</span>
        </li>
            </NavLink>

            <li className="list-group-item">
                    <span className="fa-stack fa-1x d-inline-block">
                    <i className="fas fa-circle fa-stack-1x wd-text-white"></i>
                    <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse text-black"></i>
                    </span>
          <span className="d-none d-xl-inline wd-text-white"> More</span>
        </li>
      </ul>
      <div className="d-grid gap-2 mt-3">
        <button type="button" className="btn btn-primary btn-follow ">Tuit</button>
      </div>
        </>

    );
}
export default NavigationSidebar;

