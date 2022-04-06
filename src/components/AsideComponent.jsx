import React from "react";
import { SuggestionItem } from "./SuggestionItem";

export const AsideComponent = ({users}) => {
    return (
        <>
            <aside>
                <div className="user-info">
                    <div className="user-info__principal">
                        <div className="user-info__pic">
                            <img
                                src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1"
                                alt=""
                            />
                        </div>
                        <div className="user-info__name">
                            <span>React-js</span>
                            <p>Arnoldo Ortíz</p>
                        </div>
                    </div>
                    <div className="btn">Change</div>
                </div>
                <div className="suggestions">
                    <div className="suggestions__header">
                        <p className="suggestions__text">Suggestions for you</p>
                        <span>See more</span>
                    </div>
                    <div className="users_suggestion">
                        {users.map((user, index) => (
                            <SuggestionItem key={index} user={user} />
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
};
