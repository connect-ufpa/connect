import React from 'react';
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Splash from './components/Splash';
import Login from './components/Login';
import CreateUser from './components/CreateUser';
import ForgotPassword from './components/ForgotPassword';
import Main from './components/Main';

export const MainScreen = StackNavigator({
  Main: { screen: Main },
});


export const SideMenu = DrawerNavigator({
  Main: { screen: Main },
    initialRouteName: 'Main',
    drawerBackgroundColor: 'transparent',
    
});


export const UnauthorizedScreens = StackNavigator({
  Login: { screen: Login },
  CreateUser: { screen: CreateUser },
  ForgotPasword: { screen: ForgotPassword }
  },{
    initialRouteName: 'Login'
});

export const AuthorizedScreens = StackNavigator({
  SideMenu: {
    screen: SideMenu,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});