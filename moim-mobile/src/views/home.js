import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image
  } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const navigateAction = NavigationActions.navigate({
  routeName: 'lists',

  params: {},

  action: NavigationActions.navigate({ routeName: 'lists' }),
});

class Home extends Component {
  render() {
    return (
      <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
        <View style={styles.contentView}>
          <Image
          source={require('../../assets/icons/logo.png')}
          style={{width: 425, height: 250}}
        />
          <Input
            containerStyle={{ marginVertical: 40 }}
            placeholder='Loan Amount'>
          </Input>
          <View
            containerStyle={{ marginVertical: 40 }}
          >
          <Button
            containerStyle={{ marginVertical: 200 }}
            buttonStyle={{
              backgroundColor: '#1AC1D4',
              borderRadius: 5
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
            icon={
              <Icon
                name="check-circle"
                size={23}
                color="white"
              />
            }
            onPress={() => {
              this.props.navigation.dispatch(navigateAction)
            }}
            title=" Submit">
          </Button>
        </View>



        </View>
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
