import React from "react";
import { PostItem } from "./PostItem";

export const PostComponets = ({posts}) => {
    return (
        <>
            <div className="post-section">
                {
                    posts.map((post, index) => (
                        <PostItem key={index} post={post}/>
                    ))
                }
            </div>
        </>
    );
};
