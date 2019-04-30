import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Input, Image } from 'react-native-elements';
import { ListItem } from 'react-native-elements'

export default class ListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authInfo: this.props.authInfo,
            loanInfo: this.props.loanInfo,
            friends: this.props.loanInfo.friends,
        };
    }
    render() {
        return (
            <View>
            <View>
            {
                this.state.friends.map((l, i) => (
                    l.chosen ?
                        <ListItem
                            key={i}
                            leftAvatar={{ source: { uri: l.avatar_url } }}
                            title={l.name}
                            subtitle={l.value.toString()}
                            containerStyle={{
                                backgroundColor: "#A6D8D4"
                            }}
                            onPress={() => {
                                this.state.friends[i].chosen = !this.state.friends[i].chosen;
                                this.props.choose(this.state.friends);
                            }}
                        /> :
                        <ListItem
                            key={i}
                            leftAvatar={{ source: { uri: l.avatar_url } }}
                            title={l.name}
                            subtitle={l.value.toString()}
                            containerStyle={{
                                backgroundColor: "#eeeeee"
                            }}
                            onPress={() => {
                                this.state.friends[i].chosen = !this.state.friends[i].chosen;
                                this.props.choose(this.state.friends);
                            }}
                        />
                ))
            }
            </View >
            <View>
                <Button
                icon={{
                    name: "check-circle",
                    size: 26,
                    color: "white"
                }}
                buttonStyle={{
                    marginTop: 30,
                    borderRadius: 5,
                    marginHorizontal: 20,
                    padding: 10,
                    paddingHorizontal: 20,
                }}
                onPress={() => {
                    this.props.submit(
                        this.state.authInfo.userInfo.email,
                        this.state.loanInfo.friends,
                        this.state.loanInfo.amount,
                        this.state.loanInfo.postNum,
                        this.state.loanInfo.isRepayment,
                    )
                }}
                title="Submit"
                />
            </View>
            </View>
        );
    }
}
