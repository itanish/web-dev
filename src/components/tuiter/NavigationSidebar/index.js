import React from "react";
import '../../../vendors/fontawesome/css/all.min.css';
import './navigation.css'

const NavigationSidebar = ({
                               active = 'explore'
                           }) => {

    console.log(active);

    return(
        <>

        <ul className="list-group">
        <li className="list-group-item" aria-current="true">
          <i className="fa-brands fa-twitter wd-text-white" aria-hidden="true"></i>
        </li>
        
        <a className="wd-nav-link" href = "../HomeScreen/index.html">

           <li className={`list-group-item
        ${active === 'home' ? 'active' : ''}`}>
          <span className="d-inline"><i className="fa-solid fa-house wd-text-white" aria-hidden="true"></i></span>
          <span className="d-none d-xl-inline wd-text-white">Home</span>
        </li>
        </a>

        <a className="wd-nav-link" href = "../ExploreScreen/index.html">
        <li className={`wd-navigation list-group-item
        ${active === 'explore' ? 'active' : ''}`}>
          <span className="d-inline"><i className="fa-solid fa-hashtag wd-text-white" aria-hidden="true"></i></span>
          <span className="d-none d-xl-inline wd-text-white wd-nav-active">Explore</span>
        </li>
        </a>
        
        <li className="list-group-item">
          <span className="d-inline"><i className="fa-solid fa-bell wd-text-white" aria-hidden="true"></i></span>
          <span className="d-none d-xl-inline wd-text-white">Notifications</span>
        </li>
        <li className="list-group-item">
          <span className="d-inline"><i className="fa-solid fa-envelope wd-text-white" aria-hidden="true"></i></span>
          <span className="d-none d-xl-inline wd-text-white">Messages</span>
        </li>
        <li className="list-group-item">
          <span className="d-inline"><i className="fa-solid fa-bookmark wd-text-white" aria-hidden="true"></i></span>
          <span className="d-none d-xl-inline wd-text-white">Bookmarks</span>
        </li>
        <li className="list-group-item">
          <span className="d-inline"><i className="fa-solid fa-list wd-text-white" aria-hidden="true"></i></span>
          <span className="d-none d-xl-inline wd-text-white">Lists</span>
        </li>
        <li className="list-group-item">
          <span className="d-inline"><i className="fa-solid  fa-user wd-text-white" aria-hidden="true"></i></span>
          <span className="d-none d-xl-inline wd-text-white">Profile</span>
        </li>
        <li className="list-group-item">
                    <span className="fa-stack fa-1x d-inline-block">
                    <i className="fas fa-circle fa-stack-1x wd-text-white"></i>
                    <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse text-black"></i>
                    </span>
          <span className="d-none d-xl-inline wd-text-white">More</span>
        </li>
      </ul>
      <div className="d-grid gap-2 mt-3">
        <button type="button" className="btn btn-primary btn-follow ">Tuit</button>
      </div>
        </>

    );
}
export default NavigationSidebar;

