
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util'; //ProctedRoute
import { Switch, Route } from 'react-router-dom'; //Route
import SplashPage from './splash/splash';
import Modal from './modal/modal'
import NavBar from './mainNav/nav_container';
import "./css/test.scss"
import MainPage from './main/main_container';

const App = () => (
    
    <div>
        <Modal/>
        <NavBar/>
        <Switch>
            <AuthRoute exact path="/" component={SplashPage} />
<<<<<<< HEAD
=======
            <ProtectedRoute exact path="/main" component={MainPage}/>
>>>>>>> cc35fe9277d90aaef39a6c601ac481fb4b98d0c6
        </Switch>
    </div>
);

export default App;