import PostSummaryList from "../PostSummaryList/index.js";
import React from "react";
import './explore.css';

const ExploreComponent = () => {

    return(
        <>
            <div className="row align-items-center mt-3">
                <div className="col-11 wd-padding-col">

                    <div className="inner-addon left-addon">
                        <i className="gylph fa-solid fa-search wd-search-icon"></i>
                        <input type="text" className="wd-search form-control form-rounded" placeholder="Search Tuit" />
                    </div>
                </div>

                    <div className="col-1 wd-padding-col">
                        <a href="explore-settings.html">
                            <i className="fa-solid fa-cog wd-settings-icon"></i>
                        </a>
                    </div>
            </div>
            
            <div className="row mt-2 wd-border-bottom">
                <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">For You</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="news.html">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li className="nav-item d-none d-md-inline-block">
                        <a className="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>

            <div className="row">
                <div className="card p-0 card-main">
                    <div className="card wd-bg-black card-main">
                        <img src="../tuiter/images/spacex.jpeg" width="100%"/>
                        <div className="card-img-overlay d-flex flex-column justify-content-end">
                            <h5 className="card-title wd-text-overlay">SpaceX's Starship</h5>
                        </div>
                    </div>
                    <PostSummaryList/>
                </div>
           </div>
        </>
    );
}

export default ExploreComponent;

