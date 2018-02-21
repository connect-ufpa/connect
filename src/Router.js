import React from 'react';
import { StackNavigator } from "react-navigation";
import Splash from './components/Splash';
import Login from './components/Login';
import CreateUser from './components/CreateUser';
import Main from './components/Main';

export const UnauthorizedScreens = StackNavigator({
    Login: { screen: Login },
    CreateUser: { screen: CreateUser }
  },{
    initialRouteName: 'Login',  
    headerMode: 'screen'
});

export const AuthorizedScreens = StackNavigator({
    Main: { screen: Main }
  },{
    initialRouteName: 'Main',
    headerMode: 'screen'
});