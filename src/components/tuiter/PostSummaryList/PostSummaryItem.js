import React from "react";

const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "../../../images/react-blue.png"
                             }
                         }) => {
    return(
            <li className="list-group-item wd-list-group list-group-item-main">
              <div className="card-body wd-bg-black card-main">
                <div className="row">
                  <div className="col-10">
                    <div className="row">
                      <span className="wd-topics">{post.topic}</span>
                    </div>
                    <div className="row">
                      <div className="col">
                        <span className="wd-topics-main wd-text-white">{post.userName} </span>
                        <i className="fa-solid fa-circle-check wd-text-white" aria-hidden="true"></i>
                        <span className="wd-topics"> - {post.time}</span>
                      </div>
                    </div>
                    <div className="row">
                      <span className="wd-bold wd-text-white">{post.title}</span>
                    </div>

                  </div>

                  <div className="col-2">
                    <img src={post.image} className="wd-post-image"/>
                  </div>

                </div>
              </div>
            </li>
    );
}
export default PostSummaryItem;
