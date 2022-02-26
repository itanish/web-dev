import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js"

const PostSummaryList = () => {
    return (`
        <ul class="list-group list-group-flush">
            ${
                post.map(data => {
                    return(PostSummaryItem(data));
                }).join('')
            }

        </ul>
`); }

export default PostSummaryList;
