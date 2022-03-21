import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList";
import React from "react";
import './home.css';

const HomeScreen = () => {
    return(
        <div className="row">
            <div className="col-2 col-xl-2 mt-3">
                <NavigationSidebar active="home"/>
            </div>
            <div
                className="col-10 col-lg-8 col-xl-7 align-items-center wd-border-left-right ml-3">
                <PostList/>
            </div>
            <div className="col-lg-3 d-none d-lg-block mt-3">
                <PostSummaryList/>
            </div>
        </div>
    );
};
export default HomeScreen;