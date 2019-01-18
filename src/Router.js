import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { firebaseAuth } from './config/Config';
import Login from './components/Login';
import CriarConta from './components/CriarConta';
import EsqueciSenha from './components/EsqueciSenha';
import Localizacao from './components/Localizacao';
import MenuLateral from './components/SideMenu';
import Perfil from './components/Perfil';
import Eventos from './components/Eventos';
import Ajuda from './components/Ajuda';
import Sobre from './components/Sobre';
import CriarEvento from './components/CriarEvento';
import EditarEvento from './components/EditarEvento';
import EditarEventoMapa from './components/EditarEventoMapa';
import VisualizarEvento from './components/VisualizarEvento';
import VisualizarEventoMapa from './components/VisualizarEventoMapa';

const Logout = () => {
  return (
    firebaseAuth().signOut(), null
  );
};

export const LocalizacaoScreen = StackNavigator({
  Localizacao: { screen: Localizacao },
});

export const PerfilScreen = StackNavigator({
  Perfil: { screen: Perfil },
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
        color: '#CC2820',
      },
      drawerLabel: 'Sair',
      drawerIcon: () => (
        <Icon
          name='sign-out'
          type='font-awesome'
          size={24}
          color='#CC2820'
        />
      ),
    }
  },
}, {
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
  CriarConta: { screen: CriarConta },
  EsqueciSenha: { screen: EsqueciSenha }
  }, {
    initialRouteName: 'Login'
  });

export const AuthorizedScreens = StackNavigator({
  SideMenu: {
    screen: SideMenu,
    navigationOptions: () => ({
      header: null
    }),
  },
  Ajuda: { screen: Ajuda },
  Sobre: { screen: Sobre },
  CriarEvento: { screen: CriarEvento },
  EditarEvento: { screen: EditarEvento },
  EditarEventoMapa: { screen: EditarEventoMapa },
  VisualizarEvento: { screen: VisualizarEvento },
  VisualizarEventoMapa: { screen: VisualizarEventoMapa }
});
