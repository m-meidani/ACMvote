/**
 * Created by Mehran on 12/2/16.
 */
import React from 'react';
import Header from '../Header/Header';

// Import CSS Files
import 'reset-css/reset.css';
import './Fonts/fonts.css';
import './Layout.css';

class Layout extends React.Component {

  render () {
    return (
      <div className="app">
        <Header/>
        <div className={'main-container'}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout;