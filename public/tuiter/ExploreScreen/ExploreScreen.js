import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-1 col-xl-2 mt-3">
            ${NavigationSidebar('explore')}
        </div>
        <div class="col-8 col-md-11 col-sm-11 col-lg-8 col-xl-7 align-items-center wd-border-left-right">
        ${ExploreComponent()}
        </div>
        <div class="col-lg-3 d-none d-lg-block mt-3">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);


