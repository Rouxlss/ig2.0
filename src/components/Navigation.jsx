import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { DashboardRoutes } from "./DashboardRoutes";

export const Navigation = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" component={DashboardRoutes} />
                </Switch>
            </Router>
        </>
    );
};

