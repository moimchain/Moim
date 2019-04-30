import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import HomeScreen from "../screens/HomeScreen";

class HomeContainer extends React.Component {
  render() {
    return React.createElement(HomeScreen,
      {
        setAmount: (amount, postNum, isRepayment) => {
          console.log("setAmount>>>>>>>>>>>")
          console.log(amount, ":", postNum)
          this.props.performSetAmount(amount, postNum, isRepayment);
          this.props.navigation.navigate("List");
        },
        logout: () => {
          this.props.performLogout();
          this.props.performCleanUp();
          this.props.navigation.navigate("Login");
        },
        authInfo: this.props.authInfo,
        loanInfo: this.props.loanInfo,
      });
  }
}

function mapStateToProps(state) {
  return {
    authInfo: state.authInfo,
    loanInfo: state.loanInfo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
