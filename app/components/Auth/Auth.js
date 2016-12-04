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
      auth.username = username;
      auth.first_name = response.data.name;
      axios.defaults.headers.common['Authorization'] = ' JWT ' + auth.authToken;
      cb("Success");
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code
        // that falls out of the range of 2xx
        if(error.response.data.reason) {
          return cb(error.response.data.reason);
        }
        cb(error.response.data);
      } else {
        // Something happened in setting up the request that triggered an Error
        return cb('Error', error.message);
      }
      return cb('خطا در ارتباط با سرور. لطفا بعدا دوباره تلاش کنید.');
    })
};

let auth = {
  isLoggedIn: false,
  authToken: null,
  username: null,
  first_name: null
};

exports.auth = auth;
exports.login = login;