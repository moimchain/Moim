import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import ListScreen from "../screens/ListScreen";

class ListContainer extends React.Component {
    render() {
        return React.createElement(ListScreen,
          {
            submit: (borrower, friends, amount, postNum, isRepayment) => {
                console.log("performSubmit>>>>>>>>>>>")
                  console.log(borrower, ":", friends, ":", amount, ":", postNum)
                if (isRepayment) {
                    this.props.performRepayment(borrower, amount, postNum);
                    this.props.navigation.navigate("Main");
                } else {
                    this.props.performSubmit(borrower, friends, amount, postNum);
                    this.props.navigation.navigate("Profile");
                }
            },
            choose: (friends) => {
                console.log("choose>>>>>>>>>>>")
                console.log(friends)
                this.props.performChoose(friends);
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

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
