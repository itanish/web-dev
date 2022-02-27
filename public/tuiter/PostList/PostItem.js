const PostItem = (post) => {

    $(document).ready(function() {
        if (post.postTitle === '') {
            $('.wd-post-data-' + post.postTitle).hide();
            $('.wd-post-img-' + post.postTitle).addClass("wd-post-img-no-data");
        }
    });

    return(`
        <div class="row mt-3 wd-border-bottom pb-3">
        <div class="col-1">
            <img class="wd-post-avatar" src=${post.avatar}>
        </div>
        <div class="col-11">
            <div class="">
                <span class="wd-post-author">${post.author}</span>
                <i class="fa-solid fa-circle-check text-white"></i>
                <span class="wd-post-handle">@${post.userName}</span>
                <span class="wd-post-handle">. ${post.postDate}</span>
            </div>

            <div class="row">
                <span class="wd-post-post-data">${post.postData}</span>
            </div>
            
            <div class="card wd-border-post mt-1">
              <img class="card-img-top wd-post-img wd-post-img-${post.postTitle}" src=${post.postImage}>
              
              <div class="card-body wd-post-data-${post.postTitle}">
                <h6 class="card-title wd-post-data-title">${post.postTitle}</h6>
                <p class="card-text">${post.postTitleData}</p>
              </div>
            </div>

            <div class="row mt-2 ms-1">

                <div class="col-3">
                   <i class="fa-regular fa-comment wd-grid-col-bookmark-icons"></i>
                    <span class="wd-icon-count">${post.comments}</span>
                </div>

                <div class="col-3">
                   <i class="fa-solid fa-retweet wd-grid-col-bookmark-icons"></i>
                    <span class="wd-icon-count">${post.retweets}</span>
                </div>

                <div class="col-3">
                    <i class="fa-regular fa-heart wd-grid-col-bookmark-icons"></i>
                    <span class="wd-icon-count">${post.likes}</span>
                </div>

                <div class="col-3">
                   <i class="fa-solid fa-arrow-up-from-bracket wd-grid-col-bookmark-icons"></i>
                </div>

            </div>
        </div>
        </div>

    `);
}
export default PostItem;
