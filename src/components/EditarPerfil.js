import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { CardSection, Input, Loading, Texts } from './commons';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { 
  onNameChanged,
  onRegistrationChanged,
  onBirthChanged,
  dataPerfil,
  editPerfil,
} from '../actions/';
import Styles from '../Styles';

class EditarPerfil extends Component {
  static navigationOptions = {
    title: 'Editar perfil',
    headerTintColor: '#2A4065',
    headerTitleStyle: {
      fontFamily: 'Ubuntu-Medium',
      fontWeight: '200',
      fontSize: 18,
    },
    headerStyle: {
      elevation: 5,
    },
  };

  componentWillMount() {
    this.props.dataPerfil();
  }

  showLoading() {
    if (this.props.loading) return (<Loading />);
  }
  

  renderEditPerfilButton() {
    const user = {
      nome: this.props.nome,
      matricula: this.props.matricula,
      nascimento: this.props.nascimento,
      area_tematica: this.props.area_tematica,
    };
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            this.props.editPerfil(user);
          }}
        >
          <View
            style={[Styles.iconButtomStyle, { backgroundColor: '#2A4065' }]}
          >
            <Icon
              type="material-community"
              name="check"
              color="#FFF"
              size={25}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  
  render() {
    return (
      <View>
        <ScrollView style={Styles.scrollViewStyle}>
          <View
            style={{
              alignItems: 'flex-end',
              paddingTop: 5,
              paddingRight: 10,
            }}
          >
          </View>
          <CardSection>
            <Input
                iconName={'person'}
                placeholder="Nome:"
                onChangeText={nome => this.props.onNameChanged(nome)}
                value={this.props.nome}
            />
          </CardSection>
          <View>
            <Texts text={this.props.errorMessageNamePerfil} />
          </View>
          <CardSection>
            <Input
                iconName={'school'}
                keyboardType={'numeric'}
                placeholder="Matrícula:"
                value={this.props.matricula}
                onChangeText={matricula => this.props.onRegistrationChanged(matricula)}
            />
          </CardSection>
          <CardSection>
            <Input
                iconName={'date-range'}
                value={this.props.nascimento}
                placeholder={'Nascimento: 00/00/0000'}
                onChangeText={nascimento => this.props.onBirthChanged(nascimento)}
            />
          </CardSection>
          <CardSection>
            <Input
                iconName={'date-range'}
                value={this.props.area_tematica}
                placeholder={'Área Temática: Comunicação'}
                onChangeText={area_tematica => this.props.onNameChanged(area_tematica)}
            />
          </CardSection>
          <CardSection>{this.renderEditPerfilButton()}</CardSection>
        </ScrollView>
      </View >
    );
  }
}

const mapStateToProps = state => {
  return {
    nome: state.perfilEdicao.nome,
    matricula: state.perfilEdicao.matricula,
    nascimento: state.perfilEdicao.nascimento,
    area_tematica: state.perfilEdicao.area_tematica,
    errorMessageName: state.perfilEdicao.errorMessageName,
    errorMessageEmail: state.perfilEdicao.errorMessageEmail,
    errorMessageBirthday: state.perfilEdicao.errorMessageBirthday,
    errorMessageRegistration: state.perfilEdicao.errorMessageRegistration,
};
}

export default connect(mapStateToProps, {
  dataPerfil,
  onNameChanged,
  onRegistrationChanged,
  onBirthChanged,
  editPerfil,
})(EditarPerfil);

