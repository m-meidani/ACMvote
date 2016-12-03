/**
 * Created by Mehran on 12/3/16.
 */
import axios from 'axios';

let login = (username, password, cb) => {
  axios.post('/api-token-auth/', {
    username: username,
    password: password
  })
    .then(function (response) {
      auth.isLoggedIn = true;
      auth.authToken = response.data.token;
      auth.username = response.data.username;
      axios.defaults.headers.common['Authorization'] = ' JWT ' + auth.authToken;
      cb(1);
    })
    .catch(function (error) {
      console.log(error);
      cb(-1);
    })
};

let auth = {
  isLoggedIn: false,
  authToken: null,
  username: null
};

exports.auth = auth;
exports.login = login;