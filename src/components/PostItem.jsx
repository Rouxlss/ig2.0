import React from "react";

export const PostItem = ({ post }) => {
    const { type, user, avatar, content, likes, comments, time } = post;

    return (
        <div className="post">
            <div className="post__header">
                <div className="post__user_info">
                    <div className="post__user_pic">
                        <img src={avatar} alt="" />
                    </div>
                    <div className="post__user_name">{user}</div>
                </div>
                <div className="post__options">
                    <i class="fa-light fa-ellipsis"></i>
                </div>
            </div>
            <div className="post__body">
                <div className="post__content">
                    {type == "img" && <img src={content} alt="" />}
                    {type == "video" && <video src={content} controls />}
                </div>
            </div>
            <div className="post__footer">
                <div className="post__user_actions">
                    <div className="user__actions_1">
                        <div className="post__action">
                            <img src="./img/btn__megusta.png" alt="" />
                        </div>
                        <div className="post__action">
                            <img src="./img/btn__comentario.png" alt="" />
                        </div>
                        <div className="post__action">
                            <img src="./img/btn__enviar.png" alt="" />
                        </div>
                    </div>
                    <div className="user__actions_2">
                        <div className="post__action">
                            <img src="./img/btn__guardar.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="post__info">
                    <p className="post__likes">{likes} Likes</p>
                    <p className="post__comments_counts">
                        See {comments} comments
                    </p>
                    <p className="post__date">{time}</p>
                </div>
                <div className="post__comments_section">
                    <div className="comments_intereactions">
                        <div className="comments__reactions">
                            <img src="./img/btn__carita.png" alt="" />
                        </div>
                        <div className="comments__input">
                            <input type="text" placeholder="Add comment" />
                        </div>
                    </div>
                    <div className="post__comment">Post</div>
                </div>
            </div>
        </div>
    );
};
