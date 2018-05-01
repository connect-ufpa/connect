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
    height: height,
    elevation: 8,
    backgroundColor: 'white'
  },
  items: {
    width: width,
    paddingVertical: 20,
    paddingLeft: 5
  },
  inactiveTintColor: {
    fontFamily: 'Ubuntu',
    fontSize: 12,
    color: '#94999E'
  },
  activeTintColor: {
    fontFamily: 'Ubuntu',
    fontSize: 14,
    color: '#2a4065'
  }
});
