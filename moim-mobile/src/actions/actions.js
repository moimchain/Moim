import * as types from "./types";

function asyncSetTimeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function performLogin(username, password) {
  return async (dispatch, getState) => {
    try {
      // Using setTimeout to imitate async server call. Uncomment the above to create an actual server call.
      await asyncSetTimeout(300);
      const result = {
        userInfo: {
          username: username,
          firstName: 'Keon',
          lastName: 'Kim',
          id: 53475,
          email: username
        },
        token: "1111111"
      };


      if (result.userInfo) {
        dispatch(
          setLoginInfo({
            username: username,
            userInfo: result.userInfo,
            token: result.token,
            loggedIn: true,
            email: result.email
          })
        );
      } else {
        return result;
      }
    } catch (error) {
      console.error(error);
      return error;
    }
  };
}

export function performLogout() {
  return dispatch => {
    dispatch(
      setLoginInfo({
        userInfo: null,
        token: null,
        loggedIn: false,
        email: null
      })
    );
  };
}

export function performCleanUp() {
  return dispatch => {
    dispatch({
      type: types.CLEAN_UP,
    });
  };
}

export function setLoginInfo({
  userInfo,
  token,
  loggedIn,
  email,
}) {
  return {
    type: types.SAVE_USER_INFO,
    userInfo,
    token,
    email,
    loggedIn
  };
}

export function performSetAmount(amount, postNum, isRepayment) {
  console.log("performSetAmount", amount, " postNum: ", postNum)
  return async (dispatch, getState) => {
    dispatch(
      setBorrowingInfo({
        amount: amount,
        postNum,
        isRepayment,
      })
    );
  };
}

export function performSubmit(borrower, friends, amount, postNum) {
  return async (dispatch, getState) => {
    try {
      var numLenders = 0;
      var lenderList = [];
      friends.map((l, i) => {
          if (l.chosen) {
              numLenders++;
              lenderList.push(l.email)
              friends[i].value = postNum
          }
      })

      var amountPerLender = Math.ceil(amount / numLenders);
      var amountList = Array.apply(null, Array(numLenders)).map(function () {return amountPerLender})
      const req = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          lenderList,
          amountList,
          borrower,
          postNum,
        })
      }
      console.log("REQUEST");
      console.log(req);
      console.log("url: ", `http://cc776f29.ngrok.io/borrow`)
      if (lenderList.length > 0 && amountList.length > 0) {
        const result = await fetch(`http://cc776f29.ngrok.io/borrow`, req).then(res => res.json());
        console.log("RESPONSE")
        console.log(result)
        if (result.ok) {
          dispatch({
            type: types.BORROW,
            friends,
            postNum: postNum + 1,
          });
          return result.ok;
        }
      }
    } catch (error) {
        console.error(error);
        return error;
      }
  };
}


export function performRepayment(borrower, repayValue, postNum) {
  return async (dispatch, getState) => {
    try {
      const req = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          borrower,
          postNum,
          repayValue,
        })
      }
      console.log("REQUEST");
      console.log(req);
      console.log("url: ", `http://cc776f29.ngrok.io/repay`)
      if (postNum > 0) {
        fetch(`http://cc776f29.ngrok.io/repay`, req);
      }
    } catch (error) {
        console.error(error);
        return error;
      }
  };
}


export function setBorrowingInfo({
  amount,
  postNum,
  isRepayment,
}) {
  const res = {
    type: types.SET_AMOUNT,
    amount,
    postNum,
    isRepayment,
  };
  console.log("setBorrowingInfo>>>", res)
  return res;
}

export function performGetLoanInfo(borrower, postNum) {
  return async (dispatch, getState) => {
    try {
        const req = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "borrower": borrower,
            "postNum": postNum,
          })
        }
      console.log("REQUEST");
      console.log(req);
      const result = await fetch(
        `http://cc776f29.ngrok.io/getLoanInfo`,
        req
      ).then(res => res.json());
      console.log("RESPONSE")
      console.log(result)
        if (result.ok) {
          dispatch({
            type: types.GET_LOAN_INFO,
            totalAmount: result.totalAmount,
            totalPayBackedAmount: result.totalPayBackedAmount,
            payBackedAmountArray: result.payBackedAmountArray,
            payBackedTimeArray: result.payBackedTimeArray,
          });
        } else {
          return result;
        }
      } catch (error) {
        console.error(error);
        return error;
      }
    };
}

export function performChoose(friends) {
  return async (dispatch, getState) => {
    dispatch({
      type: types.CHOOSE,
      friends
    });
  };
}
