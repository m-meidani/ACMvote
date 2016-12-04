import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Layout from './components/Layout/Layout';
import axios from 'axios';
import Auth from './components/Auth/Auth';
import Config from './components/Config/Config';

// Import pages
import LoginPage from './components/LoginPage/Login';
import Vote from './components/Vote/Vote';
import Thanks from './components/Thanks/Thanks';
import Privacy from './components/Privacy/Privacy';

injectTapEventPlugin();

const container = document.getElementById('container');

const muiTheme = getMuiTheme({
  isRtl: true,
  fontFamily: 'Shabnam, sans-serif',
  contentFontFamily: 'Shabnam, sans-serif'
});

axios.defaults.baseURL = Config.api_uri;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route component={Layout} path="/">
        <Route path="vote_ui">
          <IndexRoute component={LoginPage}/>
          <Route path="vote" component={Vote}/>
          <Route path="thanks" component={Thanks}/>
          <Route path="privacy" component={Privacy}/>
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>, container
);
