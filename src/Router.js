import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Icon } from 'react-native-elements';
import { firebaseAuth } from './config/Config';
import Splash from './components/Splash';
import Login from './components/Login';
import CreateUser from './components/CreateUser';
import ForgotPassword from './components/ForgotPassword';
import Main from './components/Main';
import MenuLateral from './components/SideMenu';
import MeuPerfil from './components/MeuPerfil';

const Logout = () => {
  return (
    firebaseAuth().signOut(), null
  );
}

export const MainScreen = StackNavigator({
  Main: { screen: Main },
});

export const PerfilScreen = StackNavigator({
  MeuPerfil: { screen: MeuPerfil },
});


export const SideMenu = DrawerNavigator({
  Main: { screen: Main },
  Perfil: { screen: PerfilScreen },
  Sair: {
		screen: Logout,
		navigationOptions: {
			title: 'Sair',
			style: {
        color: 'black',
        fontSize: 20,
      },
			drawerLabel: 'Sair',
			drawerIcon: ({ tintColor }) => (
				<Icon
					name='sign-out'
	        type='font-awesome'
	        size={24}
					color='black'
				/>
    	),
  	}
	},
  },{
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
  },{
    initialRouteName: 'Login'
});

export const AuthorizedScreens = StackNavigator({
  SideMenu: { screen: SideMenu }
});