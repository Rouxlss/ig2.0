import React from "react";

export const SuggestionItem = ({ user }) => {
    const { username, avatar, cf, following } = user;

    return (
        !following && (
            <div className="user-info">
                <div className="user-info__principal">
                    <div className="user-info__pic">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="user-info__name">
                        <span>{username}</span>
                        <p>hidaldev sigue a este usuario</p>
                    </div>
                </div>
                <div className="btn">Follow</div>
            </div>
        )
    );
};
