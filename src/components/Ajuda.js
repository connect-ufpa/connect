import React, { Component } from 'react';
import {
  Dimensions,
  Text,
  ScrollView,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
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
        <Icon name="help" color="#2a4065" size={25} />
      ),
      headerLeft: (
        <TouchableOpacity style={{ flex: 1, paddingTop: 20, paddingBottom: 20, paddingRight: 20 }} onPress={() => navigate('DrawerOpen')}>
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
          color="#2a4065"
          size={25}
          onPress={() => navigate('DrawerOpen')}
        />
      ),
    };
  };

  state = {
    pergunta1: false,
    pergunta2: false,
    pergunta3: false,
    pergunta4: false,
    pergunta5: false,
    pergunta6: false,
  };

  render() {
    return (
      <ScrollView style={{ flex: 1, height: height, width: width }}>
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: '#2A4065',
              fontFamily: 'Ubuntu-Medium',
              fontSize: 16,
              textAlign: 'left',
            }}
          >
            Perguntas frequentes
          </Text>
        </View>
        <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
          <TouchableOpacity
            style={{
              marginTop: 7.5,
              paddingTop: 12.5,
              paddingBottom: 12.5,
              paddingLeft: 5,
              paddingRight: 5,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
            onPress={() => {
              this.state.pergunta1
                ? this.setState({ pergunta1: false })
                : this.setState({ pergunta1: true });
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <View style={{ flex: 5, justifyContent: 'center' }}>
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
              <View style={{ flex: 1, justifyContent: 'center' }}>
                {this.state.pergunta1 ? (
                  <Icon name="remove-circle" color="#2a4065" size={25} />
                ) : (
                  <Icon name="add-circle" color="#2a4065" size={25} />
                )}
              </View>
            </View>            
            {
              this.state.pergunta1 ? (
                <View style={{ flex: 1, marginTop: 10 }}>
                  <Text
                    style={{
                      paddingLeft: 10,
                      color: '#2D2D2D',
                      fontFamily: 'Ubuntu-Light',
                      fontSize: 12,
                      textAlign: 'left',
                    }}
                  >
                    O Connect é uma aplicação mobile desenvolvida por alunos da UFPa com o intuito de ajudar, conectar e servir a comunidade academia. 
                    Gerando rotas aos locais presentes no campus, gerenciando e tendo informações de eventos que estão ocorrendo no campus e além de providenciar 
                    informações que possam ser de utilidade para comunidade como um todo.
                  </Text>
                </View>
              ) : (
                null
              )
            }              
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginTop: 7.5,
              paddingTop: 12.5,
              paddingBottom: 12.5,
              paddingLeft: 5,
              paddingRight: 5,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
            onPress={() => {
              this.state.pergunta2
                ? this.setState({ pergunta2: false })
                : this.setState({ pergunta2: true });
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <View style={{ flex: 5, justifyContent: 'center' }}>
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
              <View style={{ flex: 1, justifyContent: 'center' }}>
                {this.state.pergunta2 ? (
                  <Icon name="remove-circle" color="#2a4065" size={25} />
                ) : (
                  <Icon name="add-circle" color="#2a4065" size={25} />
                )}
              </View>
            </View>
            
            {
              this.state.pergunta2 ? (
                <View style={{ flex: 1, marginTop: 10 }}>
                  <Text
                    style={{
                      paddingLeft: 10,
                      color: '#2D2D2D',
                      fontFamily: 'Ubuntu-Light',
                      fontSize: 12,
                      textAlign: 'left',
                    }}
                  >
                    De ante mão agradecemos qualquer tipo de feedback construtivo e relatos. 
                    Por favor, envie um e-mail explicando o que venha ter acontecido para: connect-team@gmail.com.
                  </Text>
                </View>
              ) : (
                null
              )
            }              
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginTop: 7.5,
              paddingTop: 12.5,
              paddingBottom: 12.5,
              paddingLeft: 5,
              paddingRight: 5,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
            onPress={() => {
              this.state.pergunta3
                ? this.setState({ pergunta3: false })
                : this.setState({ pergunta3: true });
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <View style={{ flex: 5, justifyContent: 'center' }}>
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
              <View style={{ flex: 1, justifyContent: 'center' }}>
                {this.state.pergunta3 ? (
                  <Icon name="remove-circle" color="#2a4065" size={25} />
                ) : (
                  <Icon name="add-circle" color="#2a4065" size={25} />
                )}
              </View>
            </View>
            
            {
              this.state.pergunta3 ? (
                <View style={{ flex: 1, marginTop: 10 }}>
                  <Text
                    style={{
                      paddingLeft: 10,
                      color: '#2D2D2D',
                      fontFamily: 'Ubuntu-Light',
                      fontSize: 12,
                      textAlign: 'left',
                    }}
                  >
                    Todos os dados são salvos em um banco de dados providenciando pelo Google. 
                    Respeitamos sua privacidade, por tanto não utilizamos e nem vendemos dados sensiveis do usuário.
                  </Text>
                </View>
              ) : (
                null
              )
            }              
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginTop: 7.5,
              paddingTop: 12.5,
              paddingBottom: 12.5,
              paddingLeft: 5,
              paddingRight: 5,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
            onPress={() => {
              this.state.pergunta4
                ? this.setState({ pergunta4: false })
                : this.setState({ pergunta4: true });
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <View style={{ flex: 5, justifyContent: 'center' }}>
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
              <View style={{ flex: 1, justifyContent: 'center' }}>
                {this.state.pergunta4 ? (
                  <Icon name="remove-circle" color="#2a4065" size={25} />
                ) : (
                  <Icon name="add-circle" color="#2a4065" size={25} />
                )}
              </View>
            </View>
            
            {
              this.state.pergunta4 ? (
                <View style={{ flex: 1, marginTop: 10 }}>
                  <Text
                    style={{
                      paddingLeft: 10,
                      color: '#2D2D2D',
                      fontFamily: 'Ubuntu-Light',
                      fontSize: 12,
                      textAlign: 'left',
                    }}
                  >
                    A equipe de desenvolvimento é composta por três alunos de Engenharia da Computação:
                    Ailson Freire, Hugo Bragança e Otavio Augusto.
                    Sendo orientada e coordenada pelo Prof. Dr. Sandro Bezerra.
                  </Text>
                </View>
              ) : (
                null
              )
            }              
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginTop: 7.5,
              paddingTop: 12.5,
              paddingBottom: 12.5,
              paddingLeft: 5,
              paddingRight: 5,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
            onPress={() => {
              this.state.pergunta5
                ? this.setState({ pergunta5: false })
                : this.setState({ pergunta5: true });
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <View style={{ flex: 5, justifyContent: 'center' }}>
                <Text
                  style={{
                    paddingLeft: 10,
                    color: '#2A4065',
                    fontFamily: 'Ubuntu-Regular',
                    fontSize: 14,
                    textAlign: 'left',
                  }}
                >
                  Como posso inserir conteúdo?
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                {this.state.pergunta5 ? (
                  <Icon name="remove-circle" color="#2a4065" size={25} />
                ) : (
                  <Icon name="add-circle" color="#2a4065" size={25} />
                )}
              </View>
            </View>
            
            {
              this.state.pergunta5 ? (
                <View style={{ flex: 1, marginTop: 10 }}>
                  <Text
                    style={{
                      paddingLeft: 10,
                      color: '#2D2D2D',
                      fontFamily: 'Ubuntu-Light',
                      fontSize: 12,
                      textAlign: 'left',
                    }}
                  >
                    Utilize as funcionalidades de criar/inserir local ou evento. 
                    O mesmo será verificado pelo administrador, sendo aceito ou não em nosso banco de dados.
                  </Text>
                </View>
              ) : (
                null
              )
            }              
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginTop: 7.5,
              paddingTop: 12.5,
              paddingBottom: 12.5,
              paddingLeft: 5,
              paddingRight: 5,
              width: '100%',
              borderRadius: 5,
              elevation: 2,
              backgroundColor: 'white',
            }}
            onPress={() => {
              this.state.pergunta6
                ? this.setState({ pergunta6: false })
                : this.setState({ pergunta6: true });
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <View style={{ flex: 5, justifyContent: 'center' }}>
                <Text
                  style={{
                    paddingLeft: 10,
                    color: '#2A4065',
                    fontFamily: 'Ubuntu-Regular',
                    fontSize: 14,
                    textAlign: 'left',
                  }}
                >
                  
                  Qual a abrangência do aplicativo?
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                {this.state.pergunta6 ? (
                  <Icon name="remove-circle" color="#2a4065" size={25} />
                ) : (
                  <Icon name="add-circle" color="#2a4065" size={25} />
                )}
              </View>
            </View>
            
            {
              this.state.pergunta6 ? (
                <View style={{ flex: 1, marginTop: 10 }}>
                  <Text
                    style={{
                      paddingLeft: 10,
                      color: '#2D2D2D',
                      fontFamily: 'Ubuntu-Light',
                      fontSize: 12,
                      textAlign: 'left',
                    }}
                  >
                    Infelizmente o aplicativo é um prototípo, portanto sua área de abragência atualmente fica restrita ao campus Belém da UFPa.
                  </Text>
                </View>
              ) : (
                null
              )
            }              
          </TouchableOpacity>       
        </View>
        
        <View style={{ padding: 20 }}>
          <Text
            style={{
              color: '#2A4065',
              fontFamily: 'Ubuntu-Medium',
              fontSize: 16,
              textAlign: 'left',
            }}
          >
            Contato
          </Text>
          <View style={{ flex: 1, flexDirection: 'row', padding: 5, marginTop: 5 }}>
            <View
              style={{
                justifyContent: 'center',
                backgroundColor: 'white',
                height: 60,
                width: 60,
                margin: 5,
                borderRadius: 50,
                elevation: 4,
              }}
            >
              <Icon name="email" color="#2a4065" size={25} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                backgroundColor: 'white',
                height: 60,
                width: 60,
                margin: 5,
                borderRadius: 50,
                elevation: 4,
              }}
            >
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
