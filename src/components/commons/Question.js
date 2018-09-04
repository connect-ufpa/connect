import React from 'react';
import { Icon } from 'react-native-elements';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Question = ({ question, answer, onClick, isOpen }) => {
  return (
    <TouchableOpacity
      style={stylesQuestion.card}
      onPress={onClick}
    >
      <View style={stylesQuestion.containerContent}>
        <View style={stylesQuestion.containerText}>
          <Text style={stylesQuestion.textQuestion}>
            {question}
          </Text>
        </View>
        <View style={stylesQuestion.containerIcon}>
          {isOpen ? (
            <Icon name="remove-circle" color="#2a4065" size={25} />
          ) : (
            <Icon name="add-circle" color="#2a4065" size={25} />
          )}
        </View>
      </View>
      {isOpen ? (
        <Text style={stylesQuestion.textAnswer}>
          {answer}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

const stylesQuestion = StyleSheet.create({
  card: {
    elevation: 2,
    marginTop: 7.5,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    paddingTop: 12.5,
    paddingBottom: 12.5,
    width: '100%',
    backgroundColor: 'white',
  },
  textQuestion: {
    fontSize: 14,
    paddingLeft: 10,
    color: '#2A4065',
    textAlign: 'left',
    fontFamily: 'Ubuntu-Regular',
  },
  textAnswer: {
    fontSize: 12,
    marginTop: 10,
    paddingLeft: 10,
    color: '#2D2D2D',
    textAlign: 'left',
    fontFamily: 'Ubuntu-Light',
  },
  containerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerText: {
    flex: 5,
    justifyContent: 'center'
  },
  containerIcon: {
    flex: 1,
    justifyContent: 'center'
  },
});

export { Question };