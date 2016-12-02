/**
 * Created by Mehran on 12/2/16.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

// Import css styles

import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loggingIn: false
    }
  }

  handleUsername = (e) => {
    this.setState({username: e.target.value});
  };

  handlePassword = (e) => {
    this.setState({password: e.target.value});
  };

  handleLogin = (event) => {
    this.setState({loggingIn: true});
    localStorage.token = "token";
  };

  render() {
    return (
      <div className="LoginPage">
        {this.state.loggingIn &&
        <LinearProgress
          style={{marginTop: '30px'}}
          color="red"
        />
        }
        <h2>برای رای دادن لطفا ابتدا وارد شوید</h2>
        <div className="login-desc">
          <p>
            {'دقت داشته باشید که شما فقط یک بار اجازه رای دادن دارید.'}
          </p>
          <p>
            {' برای ورود به سیستم لطفا اکانت دانشکده فنی خود را وارد کنید. از این اکانت برای اتصال به شبکه دانشکده و یا CECM استفاده می‌کنید.'}
          </p>
        </div>
        <TextField
          floatingLabelText="نام کاربری دانشکده فنی"
          fullWidth={true}
          onChange={this.handleUsername}
        /><br />
        <TextField
          floatingLabelText="رمز عبور"
          type="password"
          fullWidth={true}
          onChange={this.handlePassword}
        /><br />

        <RaisedButton
          label="ورود"
          primary={true}
          style={{marginTop: '30px'}}
          onTouchTap={this.handleLogin}
          disabled={this.state.loggingIn}
        />

      </div>
    )
  }
}

export default Login;