import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';


import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Layout from './components/Layout/Layout';

// Import pages
import LoginPage from './components/LoginPage/Login';
import Vote from './components/Vote/Vote';
import Thanks from './components/Thanks/Thanks';

injectTapEventPlugin();

const container = document.getElementById('container');

const muiTheme = getMuiTheme({
  isRtl: true,
  fontFamily: 'Shabnam, sans-serif',
  contentFontFamily: 'Shabnam, sans-serif'
});


ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route component={Layout}>
        <Route path="/" component={LoginPage}/>
        <Route path="/vote" component={Vote}/>
        <Route path="/thanks" component={Thanks}/>
      </Route>
    </Router>
  </MuiThemeProvider>, container
);
