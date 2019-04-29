import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ProfileScreen from './profile/screen';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
