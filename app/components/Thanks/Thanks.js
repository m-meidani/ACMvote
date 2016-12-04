/**
 * Created by Mehran on 12/2/16.
 */
import React from 'react';
import Mood from 'material-ui/svg-icons/social/mood';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';
import Config from '../Config/Config';

import './thanks.css';

class Thanks extends React.Component {
  render() {
    return (
      <div className="thanks-page">
        <div>
          <Mood
            style={{height: '200px', width: '200px'}}
          /><br/>
          <span style={{fontSize: '3em'}}>
          {'باسپاس از شرکت در انتخابات'}
        </span>
        </div>
        <div>
          <RaisedButton
            label={'شروع دوباره'}
            primary={true}
            style={{margin: 12}}
            onTouchTap={() => {
              browserHistory.push(Config.baseName)
            }}
          />
        </div>
      </div>
    )
  }
}

export default Thanks