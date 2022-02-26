const PostSummaryItem = (post) => {
    return(`
            <li class="list-group-item wd-list-group list-group-item-main">
              <div class="card-body wd-bg-black card-main">
                <div class="row">
                  <div class="col-10">
                    <div class="row">
                      <span class="wd-topics">${post.topic}</span>
                    </div>
                    <div class="row">
                      <div class="col">
                        <span class="wd-topics-main wd-text-white">${post.userName}</span>
                        <i class="fa-solid fa-circle-check wd-text-white" aria-hidden="true"></i>
                        <span class="wd-topics"> - ${post.time}</span>
                      </div>
                    </div>
                    <div class="row">
                      <span class="wd-bold wd-text-white">${post.title}</span>
                    </div>

                  </div>

                  <div class="col-2">
                    <img src=${post.image} class="wd-post-image">
                  </div>

                </div>
              </div>
            </li>
    `);
}
export default PostSummaryItem;
