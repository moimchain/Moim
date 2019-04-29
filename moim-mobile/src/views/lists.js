import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import ListsScreen from './lists/screen';

export default class Lists extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal pagingEnabled decelerationRate={0.993}>
          <ListsScreen />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
