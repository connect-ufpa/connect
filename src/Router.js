import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Splash from './components/Splash';
import Login from './components/Login';
import CreateUser from './components/CreateUser';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene
                    key="splash"
                    component={Splash}
                    initial
                />
                <Scene key="auth" hideNavBar>
                    <Scene
                        key="login"
                        component={Login}
                    />
                    <Scene 
                        key="createUser"
                        component={CreateUser}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
