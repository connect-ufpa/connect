import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { HeaderImage } from '../components/commons';
import Styles from '../Styles';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const { height, width } = Dimensions.get('window');

class Ajuda extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      headerTitle: <HeaderImage />,
      headerStyle: Styles.navHeader,
      drawerLabel: 'Ajuda',
      drawerIcon: () => <Icon size={25} name="help" color="#2a4065" />,
      headerLeft: (
        <TouchableOpacity
          style={Styles.navIconCard}
          onPress={() => navigate('DrawerOpen')}
        >
          <Icon size={25} name="bars" color="#2a4065" type="font-awesome" />
        </TouchableOpacity>
      ),
      headerRight: <Icon size={25} color="#777" name="settings" />,
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
      <ScrollView style={stylesAjuda.scrollViewCard}>
        <Text style={Styles.headerText}>Perguntas frequentes</Text>
        <View style={stylesAjuda.viewCard}>
          <TouchableOpacity
            style={Styles.cardFrequentQuestion}
            onPress={() => {
              this.state.pergunta1
                ? this.setState({ pergunta1: false })
                : this.setState({ pergunta1: true });
            }}
          >
            <View style={stylesAjuda.frequentQuestionView}>
              <View style={{ flex: 5, justifyContent: 'center' }}>
                <Text style={stylesAjuda.frequentQuestionText}>
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
            {this.state.pergunta1 ? (
              <View style={{ flex: 1, marginTop: 10 }}>
                <Text style={stylesAjuda.frequentAnswerText}>
                  O Connect é uma aplicação mobile desenvolvida por alunos da
                  UFPa com o intuito de ajudar, conectar e servir a comunidade
                  academia. Gerando rotas aos locais presentes no campus,
                  gerenciando e tendo informações de eventos que estão ocorrendo
                  no campus e além de providenciar informações que possam ser de
                  utilidade para comunidade como um todo.
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.cardFrequentQuestion}
            onPress={() => {
              this.state.pergunta2
                ? this.setState({ pergunta2: false })
                : this.setState({ pergunta2: true });
            }}
          >

            <View style={stylesAjuda.frequentQuestionView}>
              <View style={{ flex: 5, justifyContent: 'center' }}>
                <Text style={stylesAjuda.frequentQuestionText}>
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

            {this.state.pergunta2 ? (
              <View style={{ flex: 1, marginTop: 10 }}>
                <Text style={stylesAjuda.frequentAnswerText}>
                  De ante mão agradecemos qualquer tipo de feedback construtivo
                  e relatos. Por favor, envie um e-mail explicando o que venha
                  ter acontecido para: connect-team@gmail.com.
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.cardFrequentQuestion}
            onPress={() => {
              this.state.pergunta3
                ? this.setState({ pergunta3: false })
                : this.setState({ pergunta3: true });
            }}
          >

            <View style={stylesAjuda.frequentQuestionView}>
              <View style={{ flex: 5, justifyContent: 'center' }}>
                <Text style={stylesAjuda.frequentQuestionText}>
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

            {this.state.pergunta3 ? (
              <View style={{ flex: 1, marginTop: 10 }}>
                <Text style={stylesAjuda.frequentAnswerText}>
                  Todos os dados são salvos em um banco de dados providenciando
                  pelo Google. Respeitamos sua privacidade, por tanto não
                  utilizamos e nem vendemos dados sensiveis do usuário.
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.cardFrequentQuestion}
            onPress={() => {
              this.state.pergunta4
                ? this.setState({ pergunta4: false })
                : this.setState({ pergunta4: true });
            }}
          >

            <View style={stylesAjuda.frequentQuestionView}>
              <View style={{ flex: 5, justifyContent: 'center' }}>
                <Text style={stylesAjuda.frequentQuestionText}>
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

            {this.state.pergunta4 ? (
              <View style={{ flex: 1, marginTop: 10 }}>
                <Text style={stylesAjuda.frequentAnswerText}>
                  A equipe de desenvolvimento é composta por três alunos de
                  Engenharia da Computação: Ailson Freire, Hugo Bragança e
                  Otavio Augusto. Sendo orientada e coordenada pelo Prof. Dr.
                  Sandro Bezerra.
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.cardFrequentQuestion}
            onPress={() => {
              this.state.pergunta5
                ? this.setState({ pergunta5: false })
                : this.setState({ pergunta5: true });
            }}
          >

            <View style={stylesAjuda.frequentQuestionView}>
              <View style={{ flex: 5, justifyContent: 'center' }}>
                <Text style={stylesAjuda.frequentQuestionText}>
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

            {this.state.pergunta5 ? (
              <View style={{ flex: 1, marginTop: 10 }}>
                <Text style={stylesAjuda.frequentAnswerText}>
                  Utilize as funcionalidades de criar/inserir local ou evento. O
                  mesmo será verificado pelo administrador, sendo aceito ou não
                  em nosso banco de dados.
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.cardFrequentQuestion}
            onPress={() => {
              this.state.pergunta6
                ? this.setState({ pergunta6: false })
                : this.setState({ pergunta6: true });
            }}
          >

            <View style={stylesAjuda.frequentQuestionView}>
              <View style={{ flex: 5, justifyContent: 'center' }}>
                <Text style={stylesAjuda.frequentQuestionText}>
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

            {this.state.pergunta6 ? (
              <View style={{ flex: 1, marginTop: 10 }}>
                <Text style={stylesAjuda.frequentAnswerText}>
                  Infelizmente o aplicativo é um prototípo, portanto sua área de
                  abragência atualmente fica restrita ao campus Belém da UFPa.
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>

        <Text style={Styles.headerText}>Contato</Text>
        <View
          style={{ flex: 1, flexDirection: 'row', padding: 5, marginTop: 5 }}
        >
          <View
            style={{
              margin: 5,
              width: 60,
              height: 60,
              elevation: 4,
              borderRadius: 50,
              justifyContent: 'center',
              backgroundColor: 'white',
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
      </ScrollView>
    );
  }
}

const stylesAjuda = StyleSheet.create({
  scrollViewCard: {
    height: '100%',
  },
  frequentQuestionText: {
    fontSize: 14,
    paddingLeft: 10,
    color: '#2A4065',
    textAlign: 'left',
    fontFamily: 'Ubuntu-Regular',
  },
  frequentAnswerText: {
    fontSize: 12,
    paddingLeft: 10,
    color: '#2D2D2D',
    textAlign: 'left',
    fontFamily: 'Ubuntu-Light',
  },
  viewCard: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  frequentQuestionView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export default Ajuda;
