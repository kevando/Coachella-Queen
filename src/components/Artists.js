import React, { Component } from 'react';
import { Container, Content, ListItem, Text, Thumbnail } from 'native-base';
import _ from 'lodash';

export default class Artists extends Component {

  render() {

    const { schedule, addArtist } = this.props;

    return (
      <Container>
        <Content>
          {
            _.map(schedule,function(event,i) {
              return (
                <ListItem key={i} button onPress={() => addArtist(event) }>
                  <Thumbnail source={{uri: 'https://trello-avatars.s3.amazonaws.com/0c09553b7077c5416d92d0a955a71a05/30.png'}} />
                  <Text>{event.artist}</Text>
                </ListItem>
              );
            })
          }
        </Content>
      </Container>
    );
  }
}
