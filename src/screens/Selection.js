import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Footer, Text, Button } from 'native-base';
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



  render() {


      return (
        <Container>
          <Header />
          <Button style={{marginVertical:10,marginHorizontal: 25}} block info onPress={this.onPreviewPress.bind(this)}><Text>Preview Schedule</Text></Button>

          <Tabs>
            <Tab heading="Artists">
              <Artists {...this.state } toggleArtist={this.toggleArtist.bind(this)} />
            </Tab>
            <Tab heading="Stages">
              <Stages />
            </Tab>
          </Tabs>

        </Container>
        );
    }
}
