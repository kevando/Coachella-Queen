import React, { Component } from 'react';
import { Container, Content, ListItem, Text, Thumbnail, Right, Body, Left } from 'native-base';
import _ from 'lodash';
import moment from 'moment';

export default class Artists extends Component {

  render() {

    const { schedule, toggleArtist } = this.props;

    return (
      <Container>
        <Content>
          {
            _.map(schedule,function(event,i) {
              var date = moment(event.start);
              return (
                <ListItem key={i} button onPress={() => toggleArtist(event) }>


                        <Body>
                            <Text>{event.name}</Text>
                            <Text note>{date.format("dddd")} {date.format("h")}:{date.format("m")}{date.format("A")}</Text>
                        </Body>
                        <Right>
                            <Text note>{event.selected ? 'Selected' : ''}</Text>
                        </Right>


                </ListItem>
              );
            })
          }
        </Content>
      </Container>
    );
  }
}
