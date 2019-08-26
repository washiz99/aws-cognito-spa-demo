var state = {
  group: '',
  cognitoInfo: {},
  loggedIn: false,
  loadingState: true,
  errorLoadingState: false
}

function setGroup(newValue) {
  console.log('group:' + newValue);
  state.group = newValue;
}

function setLoggedIn(newValue) {
  state.loggedIn = newValue;
}

function setLoggedOut() {
  state.loggedIn = false;
  state.cognitoInfo = {};
}

function setCognitoInfo(newValue){
  state.cognitoInfo = newValue;
}

export default {
  state: state,
  setLoggedIn: setLoggedIn,
  setLoggedOut: setLoggedOut,
  setGroup: setGroup,
  setCognitoInfo: setCognitoInfo
}
