/**
 * Created by Mehran on 12/2/16.
 */
import React from 'react';

// Import css classes
import s from './Header.css';

class Header extends React.Component {

  render() {
    return(
      <header>
          <p className={'title'}>
            انتخابات شاخه دانشجویی ACM
          </p>
      </header>
    )
  }
}

export default Header;