import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';
import {
  SearchBar,
  Icon,
} from 'react-native-elements';
import { Button } from 'react-native-elements';

const dummySearchBarProps = {
  showLoading: true,
  onFocus: () => console.log('focus'),
  onBlur: () => console.log('blur'),
  onCancel: () => console.log('cancel'),
  onClearText: () => console.log('cleared'),
  onChangeText: text => console.log('text:', text),
};

class Home extends Component {
  render() {
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <SearchBar placeholder="Default searchbar" {...dummySearchBarProps} />

        <Button
              title="LOG IN"
              buttonStyle={{
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{ marginVertical: 10, height: 50, width: 250 }}
              titleStyle={{ fontWeight: 'bold' }}
            />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#B46486',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  contentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  triangleLeft: {
    position: 'absolute',
    left: -20,
    bottom: 0,
    width: 0,
    height: 0,
    borderRightWidth: 20,
    borderRightColor: 'white',
    borderBottomWidth: 25,
    borderBottomColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'transparent',
  },
  triangleRight: {
    position: 'absolute',
    right: -20,
    top: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 20,
    borderLeftColor: 'white',
    borderBottomWidth: 25,
    borderBottomColor: 'transparent',
    borderTopWidth: 25,
    borderTopColor: 'transparent',
  },
  inputContainerStyle: {
    marginTop: 16,
    width: '90%',
  },
});

export default Home;
