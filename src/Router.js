import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Icon } from 'react-native-elements';
import { firebaseAuth } from './config/Config';
import Splash from './components/Splash';
import Login from './components/Login';
import CreateUser from './components/CreateUser';
import ForgotPassword from './components/ForgotPassword';
import Localizacao from './components/Localizacao';
import MenuLateral from './components/SideMenu';
import MeuPerfil from './components/MeuPerfil';
import Eventos from './components/Eventos';
import Ajuda from './components/Ajuda';
import Sobre from './components/Sobre';
import SalvarEventos from './components/SalvarEventos';
import EditarEventos from './components/EditarEventos';
import EditarEvento from './components/EditarEvento';

const Logout = () => {
  return (
    firebaseAuth().signOut(), null
  );
};

export const LocalizacaoScreen = StackNavigator({
  Localizacao: { screen: Localizacao },
});

export const PerfilScreen = StackNavigator({
  MeuPerfil: { screen: MeuPerfil },
});

export const EventosScreen = StackNavigator({
  Eventos: { screen: Eventos },
});

export const AjudaScreen = StackNavigator({
  Ajuda: { screen: Ajuda },
});

export const SobreScreen = StackNavigator({
  Sobre: { screen: Sobre },
});


export const SideMenu = DrawerNavigator({
  Localizacao: { screen: LocalizacaoScreen },
  Perfil: { screen: PerfilScreen },
  Eventos: { screen: EventosScreen },
  Ajuda: { screen: AjudaScreen },
  Sobre: { screen: SobreScreen },
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
    initialRouteName: 'Localizacao',
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
	SideMenu: {
		screen: SideMenu,
		navigationOptions: ({navigation}) => ({
			header: null
    }),
	},
  MeuPerfil: { screen: MeuPerfil },
  Eventos: { screen: Eventos },
  Ajuda: { screen: Ajuda },
  Sobre: { screen: Sobre },
  SalvarEventos: { screen: SalvarEventos },
  EditarEventos: { screen: EditarEventos },
  EditarEvento: { screen: EditarEvento } 
});
