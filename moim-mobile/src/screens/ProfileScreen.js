import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loanInfo: this.props.loanInfo
    };
  }

  render() {
    return (
      <View>
        <Text h1>Loan Status</Text>
        <Text h1>{this.props.loanInfo.totalAmount}</Text>
        <View></View>
        <Text h2>{this.props.loanInfo.totalPayBackedAmount}</Text>
        <Text h2>{this.props.loanInfo.payBackedAmountArray}</Text>
        <Text h2>{this.props.loanInfo.payBackedTimeArray}</Text>
      </View>
    );
  }
}
