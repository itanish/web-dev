import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "./ExploreComponent";

const ExploreScreen = () => {
    return(
        <div className="row">
            <div className="col-2 col-xl-2 mt-3">
                <NavigationSidebar active="explore"/>

            </div>
            <div
                className="col-10 col-lg-8 col-xl-7 align-items-center wd-border-left-right ml-3">
                <ExploreComponent/>

            </div>
            <div className="col-lg-3 d-none d-lg-block mt-3">
                <WhoToFollowList/>

            </div>
        </div>

    );
};
export default ExploreScreen;


