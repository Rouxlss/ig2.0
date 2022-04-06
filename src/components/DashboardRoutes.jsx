import React from "react";
import { Route } from "react-router-dom";
import CreatePostPage from "../pages/CreatePostPage";
import { FindPage } from "../pages/FindPage";
import { IndexPage } from "../pages/IndexPage";
import { LikesPage } from "../pages/LikesPage";
import { MessagesPage } from "../pages/MessagesPage";
import { ProfilePage } from "../pages/ProfilePage";
import { HeaderComponent } from "./HeaderComponent";

export const DashboardRoutes = () => {
    return (
        <>
            <HeaderComponent />
            <main>
                <Route path="/" exact component={IndexPage} />
                <Route path="/messages" exact component={MessagesPage} />
                <Route path="/create-post" exact component={CreatePostPage} />
                <Route path="/find" exact component={FindPage} />
                <Route path="/likes" exact component={LikesPage} />
                <Route path="/profile" exact component={ProfilePage} />
            </main>
        </>
    );
};
