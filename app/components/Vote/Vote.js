/**
 * Created by Mehran on 12/2/16.
 */
import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Stars from 'material-ui/svg-icons/action/stars';
import Tup from 'material-ui/svg-icons/action/thumb-up';
import RaisedButton from 'material-ui/RaisedButton';

import {pinkA200, transparent, white} from 'material-ui/styles/colors';

// Import css

import './Vote.css';

class Vote extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTeam: null,
      teams: [
        {
          id: 1,
          name: 'بنفش',
          color: 'rgb(98, 28, 105)',
          members: [
            {
              name: 'بهزاد اوسط',
              avatar: 'http://acm-velvet.ir/img/behzad.jpg',
              isBoss: true
            },
            {
              name: 'نازنین محسنی',
              avatar: 'http://acm-velvet.ir/img/nazanin.jpg',
              isBoss: false
            }
          ]
        },
        {
          id: 2,
          name: 'آبی‌آسمانی',
          color: 'rgb(0, 191, 255)',
          members: [
            {
              name: 'امیرحسین صیحانی',
              avatar: 'http://skyblueacm.ir/img/amirhossein.jpg',
              isBoss: true
            },
            {
              name: 'صادق حایری',
              avatar: 'http://skyblueacm.ir/img/sadegh.jpg',
              isBoss: false
            }
          ]
        }
      ]
    }
  }

  handleTeam = (team) => {
    this.setState({selectedTeam: team});
  };

  render() {
    return (
      <div className="VotePage">
        <h2>انتخاب تیم مورد نظر</h2>
        <p style={{marginTop: '20px'}}>
          لطفا تیم مورد نظر خود را انتخاب کنید. توجه کنید که شما فقط یک بار می‌توانید رای دهید.
        </p>
        {this.state.teams.map((team) => {
          return (
            <div className="team"
                 style={{
                   backgroundColor: team.color,
                   boxShadow: `0 0 10px ${team.color}`,
                   borderRadius: "5px",
                   opacity: this.state.selectedTeam && this.state.selectedTeam != team ? 0.2 : 1,
                   transition: "all 0.4s linear"
                 }}>
              <List>
                <ListItem
                  primaryText={team.name}
                  leftIcon={<Tup color={white}/>}
                  onTouchTap={() => this.handleTeam(team)}
                  style={{color: 'white'}}
                />
              </List>
              <Divider />
              <List>
                {team.members.map(function (member) {
                  return (
                    <ListItem
                      style={{color: 'white'}}
                      primaryText={member.name}
                      leftIcon={member.isBoss ? <Stars color={white}/> : null}
                      insetChildren={!member.isBoss}
                      disabled={true}
                      rightAvatar={<Avatar src={member.avatar}/>}
                    />
                  )
                })}
              </List>
            </div>)
        })}
        <RaisedButton
          label="ثبت کن"
          fullWidth={true}
          style={{marginTop: '90px'}}
          labelColor={white}
          disabled={!this.state.selectedTeam}
          backgroundColor={this.state.selectedTeam? this.state.selectedTeam.color: white}
        />
      </div>
    )
  }
}

export default Vote;