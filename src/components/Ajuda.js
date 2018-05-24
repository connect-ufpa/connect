import React, { Component } from 'react';
import { Dimensions, Text, ScrollView, View, Alert } from 'react-native';
import { Card, CardSection, Texts, HeaderImage } from '../components/commons';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const { height, width } = Dimensions.get('window');

class Ajuda extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerTitle: (
        <View style={{ flex: 1, alignContent: 'center' }}>
          <HeaderImage />
        </View>
      ),
      headerStyle: {
        paddingLeft: 15,
        paddingRight: 15,
        height: 55,
      },
      headerTitleStyle: {
        alignSelf: 'center',
      },
      drawerLabel: 'Ajuda',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name="help"
          color="#2a4065"
          size={25}
        />
      ),
      headerLeft: (
        <Icon
          type='font-awesome'
          name="bars"
          color="#2a4065"
          size={25}
          onPress={() => navigate('DrawerOpen')}
        />
      ),
      headerRight: (
        <Icon
          name='settings'
          color="#2a4065"
          size={25}
          onPress={() => navigate('DrawerOpen')}
        />
      ),
    };
  };

  render() {
    return (
      <ScrollView style={{ flex: 1, height: height, width: width}}>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: '#2A4065',
              fontFamily: 'Ubuntu-Bold',
              fontSize: 18,
              textAlign: 'left',
            }}
          >
            Perguntas frequentes
          </Text>
        </View>
        <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
          <View
            style={{
              marginTop: 7.5,
              flexDirection: 'row',
              justifyContent: 'center',
              height: 55,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
          >
            <View style={{ flex: 5, justifyContent: 'center'}}>
              <Text
                style={{
                  paddingLeft: 10,
                  color: '#2A4065',
                  fontFamily: 'Ubuntu-Regular',
                  fontSize: 14,
                  textAlign: 'left',
                }}
              >
               O que é o Connect?
              </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center'}}>
              <Icon
                name="add-circle"
                color="#2a4065"
                size={25}
              />
            </View>            
          </View>          
        
          <View
            style={{
              marginTop: 7.5,
              flexDirection: 'row',
              justifyContent: 'center',
              height: 55,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
          >
            <View style={{ flex: 5, justifyContent: 'center'}}>
              <Text
                style={{
                  paddingLeft: 10,
                  color: '#2A4065',
                  fontFamily: 'Ubuntu-Regular',
                  fontSize: 14,
                  textAlign: 'left',
                }}
              >
              Como posso inserir conteudo?
              </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center'}}>
              <Icon
                name="add-circle"
                color="#2a4065"
                size={25}
              />
            </View>            
          </View>
          
          <View
            style={{
              marginTop: 7.5,
              flexDirection: 'row',
              justifyContent: 'center',
              height: 55,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
          >
            <View style={{ flex: 5, justifyContent: 'center'}}>
              <Text
                style={{
                  paddingLeft: 10,
                  color: '#2A4065',
                  fontFamily: 'Ubuntu-Regular',
                  fontSize: 14,
                  textAlign: 'left',
                }}
              >
                Como faço para relatar erros, bugs ou feedbacks?
              </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center'}}>
              <Icon
                name="add-circle"
                color="#2a4065"
                size={25}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 7.5,
              flexDirection: 'row',
              justifyContent: 'center',
              height: 55,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
          >
            <View style={{ flex: 5, justifyContent: 'center'}}>
              <Text
                style={{
                  paddingLeft: 10,
                  color: '#2A4065',
                  fontFamily: 'Ubuntu-Regular',
                  fontSize: 14,
                  textAlign: 'left',
                }}
              >
                Quem são os membros da equipe de desenvolvimento?
              </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center'}}>
              <Icon
                name="add-circle"
                color="#2a4065"
                size={25}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 7.5,
              flexDirection: 'row',
              justifyContent: 'center',
              height: 55,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
          >
            <View style={{ flex: 5, justifyContent: 'center'}}>
              <Text
                style={{
                  paddingLeft: 10,
                  color: '#2A4065',
                  fontFamily: 'Ubuntu-Regular',
                  fontSize: 14,
                  textAlign: 'left',
                }}
              >
                Qual a área de abrangência do aplicativo?
              </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center'}}>
              <Icon
                name="add-circle"
                color="#2a4065"
                size={25}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 7.5,
              flexDirection: 'row',
              justifyContent: 'center',
              height: 55,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
          >
            <View style={{ flex: 5, justifyContent: 'center'}}>
              <Text
                style={{
                  paddingLeft: 10,
                  color: '#2A4065',
                  fontFamily: 'Ubuntu-Regular',
                  fontSize: 14,
                  textAlign: 'left',
                }}
              >
                Onde os meus dados estão sendo salvos?
              </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center'}}>
              <Icon
                name="add-circle"
                color="#2a4065"
                size={25}
              />
            </View>
          </View>              
        </View>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: '#2A4065',
              fontFamily: 'Ubuntu-Bold',
              fontSize: 18,
              textAlign: 'left',
            }}
          >
            Contato
          </Text>
          <View style={{ flex: 1, flexDirection: 'row', padding: 5 }}>
            <View style={{ justifyContent:'center', backgroundColor: 'white', height: 60, width: 60, margin: 5, borderRadius: 50, elevation: 4 }}>
              <Icon
                name="email"
                color="#2a4065"
                size={25}
              />
            </View>
            <View style={{ justifyContent:'center', backgroundColor: 'white', height: 60, width: 60, margin: 5, borderRadius: 50, elevation: 4 }}>
              <Icon
                type="font-awesome"
                name="facebook"
                color="#2a4065"
                size={25}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Ajuda;
