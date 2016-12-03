/**
 * Created by Mehran on 12/2/16.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import {Link, browserHistory} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';
import {login, auth} from '../../components/Auth/Auth';
import Snackbar from 'material-ui/Snackbar';

// Import css styles

import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggingIn: false,
      open: false
    }
  }

  handleUsername = (e) => {
    this.setState({username: e.target.value});
  };

  handlePassword = (e) => {
    this.setState({password: e.target.value});
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleLogin = (event) => {
    this.setState({loggingIn: true});
    setTimeout( () => {
      login(
        this.state.username,
        this.state.password,
        (result) => {
          if (result == 1)
            browserHistory.push('/vote');
          else
            this.setState({
              open: true,
              loggingIn: false
            });
        }
      );
    } , 1000)
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
        <Link to={`/privacy`}>{'حفظ حریم شخصی'}</Link>
        <Snackbar
          open={this.state.open}
          style={{backgroundColor: 'red'}}
          bodyStyle={{backgroundColor: 'red'}}
          message="نام کاربری یا رمزعبور اشتباه است."
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    )
  }
}

export default Login;