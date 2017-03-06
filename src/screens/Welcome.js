import React, { Component } from 'react';
import { Container, Header, Title, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Welcome extends Component {

  onWeekendPress(weekend) {
    // Pass weekend var to home
    Actions.home({weekend})
  }

  render() {

        return (
            <Container>
              <Header />

              <Content>
                <Title>Welcome to coachella queen</Title>

                  <Button onPress={() => this.onWeekendPress(1) } >
                      <Text>Weekend 1</Text>
                  </Button>

                  <Button onPress={() => this.onWeekendPress(2) } >
                      <Text>Weekend 2</Text>
                  </Button>

              </Content>

            </Container>
        );
    }
}
