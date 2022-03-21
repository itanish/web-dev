import PostItem from "./PostItem";
import post from "./postdata.json"
import React from "react";

const PostList = () => {
    return (
        <div>
            {
                post.map(data => {
                    return(
                        <PostItem post={data}/>
                    );
                })
    }

        </div>
); }

export default PostList;
