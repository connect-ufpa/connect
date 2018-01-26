import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene
                    key="login"
                    component={Login}

                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;