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
import { browserHistory } from 'react-router';
import axios from 'axios';
import {auth} from '../../components/Auth/Auth';
import CircularProgress from 'material-ui/CircularProgress';
import Config from '../Config/Config';

// Import css

import './Vote.css';

class Vote extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTeam: null,
      loaded: false,
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

  componentWillMount() {
    if(auth.isLoggedIn == false){
      browserHistory.push(Config.baseName);
    }
  }

  componentDidMount() {
    if(auth.isLoggedIn) {
      setTimeout(() => {
        axios.get('/teams/')
          .then((response) => {
            console.log(response);
            this.setState({
              loaded: true,
              teams: response.data.results
            });
          });
      }, 1000);
    }
  }

  handleVote = () => {
    if(auth.isLoggedIn) {
      axios.post('/vote/', {
        team: this.state.selectedTeam.name
      })
        .then(function (response) {
          browserHistory.push(Config.baseName + 'thanks');

        })
        .catch(function (error){
          console.log(error);
        })
    }
  };

  handleTeam = (team) => {
    this.setState({selectedTeam: team});
  };

  render() {
    return (
      <div className="VotePage">
        <h2>انتخاب تیم مورد نظر</h2>
        {auth.first_name=="Ramtin" && <p style={{fontSize: '2em', marginTop: '10px', color: 'red'}}>
          {'سلام رامتین!'}
        </p>}

        <p style={{marginTop: '20px', lineHeight: '2em'}}>
          {'لطفا ائتلاف مورد نظر خود را انتخاب کنید. توجه کنید که شما فقط یک بار می‌توانید رای دهید. برای انتخاب برروی اسم ائتلاف کلیک کنید.'}
        </p>

        {!this.state.loaded && <CircularProgress size={80}
                                                 thickness={5}
                                                 style={{
                                                   marginRight: 'auto',
                                                   marginLeft: 'auto',
                                                   marginTop: '90px',
                                                   display: 'block'
                                                 }}
        />}
        {this.state.loaded && this.state.teams.map((team) => {
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
          style={{marginTop: '90px', marginBottom: '50px'}}
          labelColor={white}
          disabled={!this.state.selectedTeam}
          backgroundColor={this.state.selectedTeam? this.state.selectedTeam.color: white}
          onTouchTap={this.handleVote}
        />
      </div>
    )
  }
}

export default Vote;