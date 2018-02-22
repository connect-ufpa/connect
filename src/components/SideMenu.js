import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { DrawerItems } from 'react-navigation';

const { width, height } = Dimensions.get('window');

class SideMenu extends Component {
  render() {
    return (
        <View>
          <View style={styles.user}>
           
          </View>
          <DrawerItems hidden={false}
            {...this.props}
            getLabel={(scene) => (
              <View style={styles.items}>
                <Text style={scene.focused ? styles.activeTintColor : styles.inactiveTintColor}>{this.props.getLabel(scene)}</Text>
              </View>
            )}
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
    width: width * 0.75,
    height: height - 100,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    elevation: 8,
  },
  items: {
    width: width - 150,
    paddingVertical: 14,
    paddingLeft: 5,
    borderBottomWidth: 0.5,
  },
  inactiveTintColor: {
    fontSize: 18,
    color: '#FFFFFF'
  },
  activeTintColor: {
    fontSize: 18,
    color: '#36bae8'
  },
  user: {
    paddingLeft: 20,
    borderTopRightRadius: 30,
  }
});