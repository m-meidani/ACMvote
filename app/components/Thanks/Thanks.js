/**
 * Created by Mehran on 12/2/16.
 */
import React from 'react';
import Mood from 'material-ui/svg-icons/social/mood';

import './thanks.css';

class Thanks extends React.Component {
  render() {
    return (
      <div className="thanks-page">
        <Mood
          style={{height: '200px', width: '200px'}}
        /><br/>
        <span style={{fontSize:'3em'}}>
          {'ممنون'}
        </span>
      </div>
    )
  }
}

export default Thanks