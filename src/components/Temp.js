import React, { Component } from 'react';
import { Container, Content, ListItem, Text, Thumbnail } from 'native-base';
import _ from 'lodash';

export default class Artists extends Component {

  render() {

    const { schedule, addArtist } = this.props;

    return (
      <Container>
        <Content>
          <Text>Some temp</Text>
        </Content>
      </Container>
    );
  }
}
