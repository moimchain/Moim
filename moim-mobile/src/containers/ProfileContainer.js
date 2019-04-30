import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import ProfileScreen from "../screens/ProfileScreen";

class ProfileContainer extends React.Component {
  componentDidUpdate() {
    if (this.props.authInfo.loggedIn) {
      postNum = this.props.loanInfo ? this.props.loanInfo.postNum : 0;
      this.props.performGetLoanInfo(this.props.authInfo.userInfo.email, postNum);
    }
  }
  render() {
    return React.createElement(ProfileScreen,
      {
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
