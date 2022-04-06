import React, { useState } from "react";
import { StoryItem } from "./StoryItem";

export const StoriesComponent = ({users}) => {

    return (
        <>
            <div className="stories">
                {
                    users.map((user, index) => (
                        <StoryItem key={index} user={user}/>
                    ))
                } 
            </div>
        </>
    );
};
