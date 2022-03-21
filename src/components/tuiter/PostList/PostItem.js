import React from "react";

const PostItem = ({
                      post =     {
                          "avatar": "images/elon_dp.jpeg",
                          "author": "Elon Musk",
                          "userName": "elonmusk",
                          "postDate": "23h",
                          "postData": "Amazing show about @Inspiration4x mission!",
                          "postImage": "images/inspiration.jpeg",
                          "postTitle": "Countdown: Inspiration4x Mission to space. Netflix Official Site.",
                          "postTitleData": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space",
                          "comments": "4.2K",
                          "retweets": "3.5K",
                          "likes": "37.5K"
                      }
                  }) => {

    // $(document).ready(function() {
    //     if (post.postTitle === '') {
    //         $('.wd-post-data-' + post.postTitle).hide();
    //         $('.wd-post-img-' + post.postTitle).addClass("wd-post-img-no-data");
    //     }
    // });

    return(
        <>
        <div class="row mt-3 wd-border-bottom pb-3">
        <div class="col-1">
            <img class="wd-post-avatar" src={post.avatar}/>
        </div>
        <div class="col-11">
            <div class="">
                <span class="wd-post-author">{post.author} </span>
                <i class="fa-solid fa-circle-check text-white"></i>
                <span class="wd-post-handle"> @{post.userName}</span>
                <span class="wd-post-handle"> . {post.postDate}</span>
            </div>

            <div class="row">
                <span class="wd-post-post-data">{post.postData}</span>
            </div>
            
            <div class="card wd-border-post mt-1">
              <img class="card-img-top wd-post-img wd-post-img-${post.postTitle}" src={post.postImage}/>
              
              <div class="card-body wd-post-data-${post.postTitle}">
                <h6 class="card-title wd-post-data-title">{post.postTitle}</h6>
                <p class="card-text">{post.postTitleData}</p>

              </div>
            </div>

            <div class="row mt-2 ms-1">

                <div class="col-3">
                   <i class="fa-regular fa-comment wd-grid-col-bookmark-icons"></i>
                    <span class="wd-icon-count">{post.comments}</span>
                </div>

                <div class="col-3">
                   <i class="fa-solid fa-retweet wd-grid-col-bookmark-icons"></i>
                    <span class="wd-icon-count">{post.retweets}</span>
                </div>

                <div class="col-3">
                    <i class="fa-regular fa-heart wd-grid-col-bookmark-icons"></i>
                    <span class="wd-icon-count">{post.likes}</span>
                </div>

                <div class="col-3">
                   <i class="fa-solid fa-arrow-up-from-bracket wd-grid-col-bookmark-icons"></i>
                </div>

            </div>
        </div>
        </div>
        </>
    );
}
export default PostItem;
