
import React from 'react';
import { AuthRoute } from '../util/route_util'; //ProctedRoute
import { Switch, Route } from 'react-router-dom'; //Route
import SplashPage from './splash/splash';
import Modal from './modal/modal'

const App = () => (
    <div>
        <Modal/>
        {/* <NavBarContainer /> */}
        <Switch>
            <AuthRoute exact path="/" component={SplashPage} />

        </Switch>
    </div>
);

export default App;