import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.json"
import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem";
import React from "react";

const PostSummaryList = () => {
    return (
        <ul className="list-group list-group-flush">
            {
                post.map(data => {
                    return(
                        <PostSummaryItem post={data}/>
                    );
                })
            }
        </ul>
    );
}

export default PostSummaryList;
