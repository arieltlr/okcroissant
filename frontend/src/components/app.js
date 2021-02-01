
import React from 'react';
import { AuthRoute } from '../util/route_util'; //ProctedRoute
import { Switch } from 'react-router-dom'; //Route
// import NavBarContainer from "./nav/navbar_container";
// import LoginFormContainer from './session/login_container';
// import SignupFormContainer from './session/signup_form_container';
import SplashPage from './splash/splash';

const App = () => (
    <div>
        {/* <NavBarContainer /> */}
        <Switch>
            <AuthRoute exact path="/" component={SplashPage} />
            {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}

        </Switch>
    </div>
);

export default App;