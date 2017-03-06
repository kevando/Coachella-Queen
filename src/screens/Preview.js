import React, { Component } from 'react';
import { Container, Header, Title, ListItem, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Preview extends Component {

  render() {
    return (
        <Container>
          <Header />
          <Content>
            <Title>preview</Title>
            {
              _.map(this.props.schedule,function(event,i) {
                return (
                  <ListItem key={i} >
                    <Text>{event.artist}</Text>
                  </ListItem>
                )
              })
            }
          </Content>
        </Container>
    );
  }
}
