import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderComponent = () => {
    return (
        <header>
            <div className="logo">
                <NavLink to="/">
                    <img
                        src="https://tec.com.pe/wp-content/uploads/2021/02/1200px-Instagram_logo.svg.png"
                        alt=""
                    />
                </NavLink>
            </div>
            <div className="search-bar">
                <div className="search-control">
                    <i className="fa-regular fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <img src="./img/btn__home.PNG" alt="" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/messages">
                            <img src="./img/btn__mensaje.PNG" alt="" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/create-post">
                            <img src="./img/btn__mas.PNG" alt="" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/find">
                            <img src="./img/btn__explorar.PNG" alt="" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/likes">
                            <img src="./img/btn__megusta.PNG" alt="" />
                        </NavLink>
                    </li>
                    <li className="profile-option">
                        <NavLink to="/profile">
                            <img
                                src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1"
                                alt=""
                            />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
