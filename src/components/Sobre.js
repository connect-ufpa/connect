import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { HeaderImage } from '../components/commons';
import Styles from '../Styles';
import { 
  Text, 
  View, 
  Image, 
  TouchableOpacity 
} from 'react-native';

const logo = require('../../assets/img/logo.png');

class Sobre extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerTitle: (
        <HeaderImage />
      ),
      headerStyle: Styles.navHeader,
      drawerLabel: 'Sobre',
      drawerIcon: () => (
        <Icon  
          size={24} 
          name="heart" 
          color="#2a4065" 
          type="font-awesome"
        />
      ),
      headerLeft: (
        <TouchableOpacity 
          style={Styles.navIconCard} 
          onPress={() => navigate('DrawerOpen')}
        >
          <Icon
            type="font-awesome"
            name="bars"
            color="#2a4065"
            size={25}

          />
        </TouchableOpacity>
      ),
      headerRight: (
        <Icon
          name="settings"
          color="#777"
          size={25}
        />
      ),
    };
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 20 }}>
          <Text
            style={{
              color: '#2A4065',
              fontFamily: 'Ubuntu-Bold',
              fontSize: 18,
              textAlign: 'left',
            }}
          >
            Sobre
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            padding: 20,
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <Image source={logo} style={{ width: 125, height: 125 }} />
          <Text
            style={{
              marginTop: 25,
              color: '#2A4065',
              fontFamily: 'Ubuntu-Regular',
              fontSize: 12,
              textAlign: 'center',
            }}
          >
            Connect UFPa © Versão 1.0 [0001]
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: '#2A4065',
              fontFamily: 'Ubuntu-Regular',
              fontSize: 10,
              textAlign: 'center',
            }}
          >
            Todos os direitos reservados
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            marginTop: 10,
            marginBottom: 20,
            padding: 20,
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              marginTop: 5,
              height: 55,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
          >
            <Text
              style={{
                paddingLeft: 10,
                color: '#2A4065',
                fontFamily: 'Ubuntu-Regular',
                fontSize: 14,
                textAlign: 'left',
              }}
            >
              Equipe de desenvolvimento
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              marginTop: 5,
              height: 55,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
          >
            <Text
              style={{
                paddingLeft: 10,
                color: '#2A4065',
                fontFamily: 'Ubuntu-Regular',
                fontSize: 14,
                textAlign: 'left',
              }}
            >
              Termo e condições
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              marginTop: 5,
              height: 55,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
          >
            <Text
              style={{
                paddingLeft: 10,
                color: '#2A4065',
                fontFamily: 'Ubuntu-Regular',
                fontSize: 14,
                textAlign: 'left',
              }}
            >
              Política de privacidade
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Sobre;
