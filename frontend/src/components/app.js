
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util'; //ProctedRoute
import { Switch, Route } from 'react-router-dom'; //Route
import SplashPage from './splash/splash';
import Modal from './modal/modal'
import NavBar from './mainNav/nav_container';
import "./css/css_imports.scss";
import MainPage from './main/main_container';
import ProfileShowContainer from './profile/profile_show_container';

const App = () => (
    
    <div>
        <Modal/>
        <NavBar/>
        <Switch>
            <AuthRoute exact path="/" component={SplashPage} />
            <ProtectedRoute exact path="/main" component={MainPage}/>
            <ProtectedRoute exact path="/profile" component={ProfileShowContainer} />
        </Switch>
    </div>
);

export default App;