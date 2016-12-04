/**
 * Created by Mehran on 12/2/16.
 */
import React from 'react';
import Header from '../Header/Header';
import {RouteTransition} from 'react-router-transition';
import Footer from '../Footer/Footer';
// Import CSS Files
import 'reset-css/reset.css';
import './Fonts/fonts.css';
import './Layout.css';

class Layout extends React.Component {

  render() {
    return (
      <div className="app">
        <Header/>
        <div className={'main-container'}>
            {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Layout;