import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      authInfo: this.props.authInfo,
      loanInfo: this.props.loanInfo,
    };
  }

  render() {
    return (
      <View>
        <Image
          source={require('../../assets/icon.png')}
          style={{ width: 425, height: 250 }}
        />
        <View >
          <Input
            containerStyle={{
              marginVertical: 50,
              backgroundColor: '#eeeeee',
              borderColor: '#eeeeee',
              borderRadius: 5,
              padding: 10,
              paddingHorizontal: 20,
            }}
            onChangeText={(amount) => this.setState({ amount })}
            placeholder='  Borrowing Amount'>
          </Input>
        </View>
        <View containerStyle={{marginTop: 70,
              flex: 1, flexDirection: 'row'}}>
          <Button
            icon={{
              name: "check-circle",
              size: 26,
              color: "white"
            }}
            buttonStyle={{
              borderRadius: 5,
              marginHorizontal: 20,
              padding: 10,
              paddingHorizontal: 20,
            }}
            onPress={() => {
              console.log("ONPRESS>>>>>", this.state)
              this.props.setAmount(this.state.amount, this.state.loanInfo.postNum + 1, false)
            }
            }
            title="Borrow"
          />
          <Button
            icon={{
              name: "check-circle",
              size: 26,
              color: "white"
            }}
            buttonStyle={{
              marginVertical: 10,
              borderRadius: 5,
              marginHorizontal: 20,
              padding: 10,
              paddingHorizontal: 20,
            }}
            onPress={() => {
              console.log("ONPRESS>>>>>", this.state)
              this.props.setAmount(this.state.amount, this.state.loanInfo.postNum, true)
            }
            }
            title="Repay"
          />
        </View>
        <View>
          <Button
            buttonStyle={{
              marginTop: 10,
              borderRadius: 5,
              marginHorizontal: 20,
              padding: 10,
              paddingHorizontal: 20,
            }}
            onPress={() => this.props.logout()}
            title="Logout"
          />
        </View>
      </View>
    );
  }
}
