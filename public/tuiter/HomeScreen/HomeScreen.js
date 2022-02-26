import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-1 col-xl-2 mt-3">
            ${NavigationSidebar('home')}
        </div>
        <div class="col-8 col-md-11 col-sm-11 col-lg-8 col-xl-7 align-items-center wd-border-left-right ml-3">
        ${PostList()}
        </div>
        <div class="col-lg-3 d-none d-lg-block mt-3">
        ${PostSummaryList()}
        </div>
        </div>
    `);
})($);


