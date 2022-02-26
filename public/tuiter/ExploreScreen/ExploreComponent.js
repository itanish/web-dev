import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row align-items-center mt-3">
                <div class="col-11 wd-padding-col">

                    <div class="inner-addon left-addon">
                        <i class="gylph fa-solid fa-search wd-search-icon"></i>
                        <input type="text" class="wd-search form-control form-rounded" placeholder="Search Tuit" />
                    </div>
                </div>

                    <div class="col-1 wd-padding-col">
                        <a href="explore-settings.html">
                            <i class="fa-solid fa-cog wd-settings-icon"></i>
                        </a>
                    </div>
            </div>
            
            <div class="row mt-2 wd-border-bottom">
                <ul class="nav nav-pills nav-justified">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-inline-block">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>

            <div class="row">
                <div class="card p-0 card-main">
                    <div class="card wd-bg-black card-main">
                        <img src="../images/spacex.jpeg" width="100%">
                        <div class="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 class="card-title wd-text-overlay">SpaceX's Starship</h5>
                        </div>
                    </div>
                    ${PostSummaryList()}
                </div>
           </div>
    `);
}
export default ExploreComponent;

