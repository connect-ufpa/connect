import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { HeaderImage, Question, ContactButton } from '../components/commons';
import Styles from '../Styles';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

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
    const { containerScrollView, containerSection, containerTitle, containerRow } = stylesAjuda;

    return (
      <ScrollView style={containerScrollView}>
        <View style={containerSection}>
          <Text style={containerTitle}>Perguntas frequentes</Text>
          <Question
            question={"O que é o Connect?"}
            answer={"O Connect é uma aplicação mobile desenvolvida por alunos da UFPa com o intuito de ajudar, conectar e servir a comunidade academia. Gerando rotas aos locais presentes no campus, gerenciando e tendo informações de eventos que estão ocorrendo no campus e além de providenciar informações que possam ser de utilidade para comunidade como um todo."}
            isOpen={this.state.pergunta1}
            onClick={() => {
              this.state.pergunta1
                ? this.setState({ pergunta1: false })
                : this.setState({ pergunta1: true })
            }}
          />
          <Question
            question={"Como faço para relatar erros, bugs ou feedbacks?"}
            answer={"De ante mão agradecemos qualquer tipo de feedback construtivo e relatos. Por favor, envie um e-mail explicando o que venha ter acontecido para: connect-team@gmail.com."}
            isOpen={this.state.pergunta2}
            onClick={() => {
              this.state.pergunta2
                ? this.setState({ pergunta2: false })
                : this.setState({ pergunta2: true })
            }}
          />
          <Question
            question={"Onde os meus dados estão sendo salvos?"}
            answer={"Todos os dados são salvos em um banco de dados providenciando pelo Google. Respeitamos sua privacidade, por tanto não utilizamos e nem vendemos dados sensiveis do usuário."}
            isOpen={this.state.pergunta3}
            onClick={() => {
              this.state.pergunta3
                ? this.setState({ pergunta3: false })
                : this.setState({ pergunta3: true })
            }}
          />
          <Question
            question={"Quem são os membros da equipe de desenvolvimento?"}
            answer={"A equipe de desenvolvimento é composta por três alunos de Engenharia da Computação: Ailson Freire, Hugo Bragança e Otavio Augusto. Sendo orientada e coordenada pelo Prof. Dr. Sandro Bezerra."}
            isOpen={this.state.pergunta4}
            onClick={() => {
              this.state.pergunta4
                ? this.setState({ pergunta4: false })
                : this.setState({ pergunta4: true })
            }}
          />

          <Question
            question={"Como posso inserir conteúdo?"}
            answer={"Utilize as funcionalidades de criar/inserir local ou evento. O mesmo será verificado pelo administrador, sendo aceito ou não em nosso banco de dados."}
            isOpen={this.state.pergunta5}
            onClick={() => {
              this.state.pergunta5
                ? this.setState({ pergunta5: false })
                : this.setState({ pergunta5: true })
            }}
          />
          <Question
            question={"Qual a abrangência do aplicativo?"}
            answer={"Infelizmente o aplicativo é um prototípo, portanto sua área de abragência atualmente fica restrita ao campus Belém da UFPa."}
            isOpen={this.state.pergunta6}
            onClick={() => {
              this.state.pergunta6
                ? this.setState({ pergunta6: false })
                : this.setState({ pergunta6: true })
            }}
          />
        </View>
        <View style={containerSection}>
          <Text style={containerTitle}>Contato</Text>
          <View style={containerRow}>
            <ContactButton 
              iconName={"email"}
            />
            <ContactButton 
              iconName={"facebook"}
              iconType={"font-awesome"}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const stylesAjuda = StyleSheet.create({
  containerScrollView: {
    height: '100%',
  },
  containerSection: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row'
  },
  containerTitle: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 10,    
    color: '#2A4065',
    textAlign: 'left',
    fontFamily: 'Ubuntu-Medium'
  }
});

export default Ajuda;
