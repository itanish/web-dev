import React from "react";
import TuitStats from "../TuitStats/tuit-stats";

const TuitListItem = ({
                          post =     {
                              "_id": "567",
                              "topic": "Space",
                              "postedBy": {
                                  "username": "SpaceX"
                              },
                              "liked": false,
                              "verified": false,
                              "handle": "spacex",
                              "title": "",
                              "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                              "attachments": {
                                  "image": "../images/starship.png"
                              },
                              "time": "last month",
                              "logo-image": "../../../images/node.png",
                              "avatar-image": "../../../images/node.png",
                              "tuits": "120K",
                              "stats": {
                                  "comments": 123,
                                  "retuits": 234,
                                  "likes": 345
                              }
                          }
                      }) => {

    return(
        <>
            <div className="row mt-3 pb-3">
                <div className="col-1">
                    <img className="wd-post-avatar" src={post["avatar-image"]}/>
                </div>
                <div className="col-11">
                    <div className="">
                        <span className="wd-post-author">{post.postedBy.username} </span>
                        <i className="fa-solid fa-circle-check text-white"></i>
                        <span className="wd-post-handle"> @{post.handle}</span>
                        <span className="wd-post-handle"> . {post.time}</span>
                    </div>

                    <div className="row">
                        <span className="wd-post-post-data">{post.tuit}</span>
                    </div>

                        {post.hasOwnProperty('attachments')
                         ? post.attachments.hasOwnProperty('image')
                            ? <div className="card wd-border-post mt-1">
                               <img className= "card-img-top wd-post-img wd-post-img-no-data" src={post.attachments.image}/>
                           </div>
                            : post.attachments.hasOwnProperty('video')
                                ? <div className="card wd-border-post mt-1">
                                  <iframe className= "card-img-top wd-post-img wd-post-img-no-data"
                                          width="420" height="345" src={"https://www.youtube.com/embed/" + post.attachments.video}>
                              </iframe>
                              </div>
                                : ""
                         : ""}

                    <TuitStats tuit={post}/>

                </div>
            </div>
        </>
    );
}
export default TuitListItem;
