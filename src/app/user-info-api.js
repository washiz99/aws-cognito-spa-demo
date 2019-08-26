import jwt_decode from 'jwt-decode';
import axios from 'axios';
import auth from './auth';


export default{  
  getUserInfo(){
    var jwtToken = auth.auth.getSignInUserSession().getAccessToken().jwtToken;
    const USERINFO_URL = 'https://'+auth.auth.getAppWebDomain() + '/oauth2/userInfo';
    var requestData = {
      headers: {
        'Authorization': 'Bearer '+ jwtToken
      }
    }
    return axios.get(USERINFO_URL, requestData).then(response => {
      return response.data;
    });
  },
  getGroupId(){
    var cognitoUser = auth.userPool.getCurrentUser();
    if(cognitoUser != null){
      cognitoUser.getSession(function(err, session) {
        if (err) {
          //console.error(err);
          return;
        }
        //console.log('session validity: ' + session.isValid());
        var sessionIdInfo = jwt_decode(session.getIdToken().jwtToken);
        console.log(sessionIdInfo['cognito:groups']);
        return sessionIdInfo['cognito:groups'];
      });
    }
  }
}
