import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import { DrawerItems } from 'react-navigation';

const { width, height } = Dimensions.get('window');

class SideMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DrawerItems hidden={false}
          {...this.props}
          getLabel={(scene) => 
            {
              if(this.props.getLabel(scene) === 'Sair') {
                return (<View style={styles.items}>
                  <Text style={styles.logoutText}>{this.props.getLabel(scene)}</Text>
                </View>);
              } else {
                return (<View style={styles.items}>
                  <Text style={scene.focused ? styles.activeTintColor : styles.inactiveTintColor}>{this.props.getLabel(scene)}</Text>
                </View>);
              }
            }
          }
        />
      </View>
    );
  }
}

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: width * 0.8,
    height: height,
    elevation: 8,
    backgroundColor: 'white',
  },
  logoutText: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 14,
    color: '#CC2820'
  },
  items: {
    width: width,
    paddingVertical: 20,
    paddingLeft: 5
  },
  inactiveTintColor: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 14,
    color: '#94999E'
  },
  activeTintColor: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 16,
    color: '#2a4065'
  }
});
