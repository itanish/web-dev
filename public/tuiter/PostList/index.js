import PostItem from "./PostItem.js";
import post from "./postdata.js"

const PostList = () => {
    return (`
        <div>
            ${
        post.map(data => {
            return(PostItem(data));
        }).join('')
    }

        </div>
`); }

export default PostList;
