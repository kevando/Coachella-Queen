import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, Content, Tab, Tabs, TabHeading, Icon, Footer, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
// import _ from 'lodash'; // not sure why i dont have to call this here
import moment from 'moment';

import Stages from '../components/Stages';
import Artists from '../components/Artists';
import { scheduleEvents } from '../data/schedule';

export default class Home extends Component {

  state = {
    schedule: [],
    selected: [],
  }

  componentWillMount() {
    var day = this.props.tabTitle;
    var sortedSchedule = _.sortBy(scheduleEvents, 'name');

    var scheduleByDay = _.filter(sortedSchedule, function(a) {
      var date = moment(a.start);
      return date.format("dddd") == day && a ;
    });

    this.setState({schedule: scheduleByDay})

  }

  toggleArtist(event) {


    var newArr = _.map(this.state.schedule, function(a) {
      return a.name === event.name ? {...event, selected: !event.selected} : a;
    });


    this.setState({schedule: newArr});
  }

  onPreviewPress() {
    var newArr = _.filter(this.state.schedule, function(a) {
      return a.selected == true && a ;
    });


    // console.log('neArr',newArr)

    Actions.preview({schedule: newArr})
  }

// <Button style={{marginVertical:10,marginHorizontal: 25}} block info onPress={this.onPreviewPress.bind(this)}><Text>Preview Schedule</Text></Button>

render() {

    return (
      <Container style={{paddingHorizontal:20}}>
      <Header />

            <Artists {...this.state } toggleArtist={this.toggleArtist.bind(this)} />



      </Container>
      );
  }
  renderr() {

      return (
        <Container style={{paddingHorizontal:20}}>

          <Tabs style={{marginTop:70,}}>
            <Tab  heading={ <TabHeading style={{backgroundColor:'transparent'}}><Text style={{color:'white'}}>Artists</Text></TabHeading>}>
              <Artists {...this.state } toggleArtist={this.toggleArtist.bind(this)} />
            </Tab>
            <Tab  heading={ <TabHeading style={{backgroundColor:'transparent'}}><Text style={{color:'white'}}>Stages</Text></TabHeading>}>
              <Stages />
            </Tab>
          </Tabs>

        </Container>
        );
    }
}
