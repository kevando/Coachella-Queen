import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Footer, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Stages from '../components/Stages';
import Artists from '../components/Artists';
import { scheduleData } from '../data/schedule';

export default class Home extends Component {

  state = {
    schedule: scheduleData,
    selected: [],
  }

  addArtist(event) {
    // This function is bad because it will also add duplicates
    // Look into lodash how to handle this
    var updatedSchedule = this.state.selected;
    updatedSchedule.push(event)
    this.setState({selected: updatedSchedule});
  }

  render() {

      return (
        <Container>
          <Header hasTabs />
          <Tabs>
            <Tab heading="Artists">
              <Artists {...this.state } addArtist={this.addArtist.bind(this)} />
            </Tab>
            <Tab heading="Stages">
              <Stages />
            </Tab>
          </Tabs>
          <Footer>
            <Text onPress={()=>Actions.preview({schedule: this.state.selected})} >Preview Schedule</Text>
          </Footer>
        </Container>
        );
    }
}
