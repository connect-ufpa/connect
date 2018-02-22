import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator } from "react-navigation";
import Splash from './components/Splash';
import Login from './components/Login';
import CreateUser from './components/CreateUser';
import ForgotPassword from './components/ForgotPassword';
import Main from './components/Main';
import MenuLateral from './components/SideMenu';
import MeuPerfil from './components/MeuPerfil';

export const MainScreen = StackNavigator({
  Main: { screen: Main },
});

export const PerfilScreen = StackNavigator({
  MeuPerfil: { screen: MeuPerfil },
});


export const SideMenu = DrawerNavigator({
  Main: { screen: Main },
  Perfil: { screen: PerfilScreen },
},
  {
    initialRouteName: 'Main',
    contentComponent: props => <MenuLateral {...props} />,
    drawerBackgroundColor: 'transparent',
    contentOptions: {
      activeBackgroundColor: 'transparent'
    }
  }
);


export const UnauthorizedScreens = StackNavigator({
  Login: { screen: Login },
  CreateUser: { screen: CreateUser },
  ForgotPasword: { screen: ForgotPassword }
}, {
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