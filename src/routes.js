import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import CSLGList from './containers/CSLGListView';
import About from './containers/About';
import CustomLayout from './containers/Layout';
import Login from "./components/Login";

// A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.

function BaseRouter(props) {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                     <Route path = '/B.S.A.' component = {CustomLayout} />
                    <Route exact path="/login/"> <Login {...props} /></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
};
export default BaseRouter;

