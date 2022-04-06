import React from "react";

export const StoryItem = ({ user }) => {
    const { username, avatar, cf, following } = user;

    return (
        following && (
            <div className="story">
                <div
                    className={`story__pp ${
                        cf ? "cf__story" : "default__story"
                    } `}
                >
                    <div className="story__pic">
                        <img src={avatar} alt="pp" />
                    </div>
                </div>
                <div className="story__name">{username}</div>
            </div>
        )
    );
};
