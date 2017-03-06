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


              <Content style={{paddingHorizontal: 20}}>

                <Title style={{marginTop:60,fontSize:40,textAlign:'center'}}>COACHELLA</Title>
                <Title style={{marginBottom:60,fontSize:50,letterSpacing:20,textAlign:'center'}}>QUEEN</Title>

                <Text style={{marginBottom:30}}>Festivals bring us closer together</Text>

                <Text style={{marginBottom:30}}>
                  Ironically, it is easy to get lost admist the chaos of the fun
                  supplements. People lose cell service and become worrisome.
                </Text>

                <Text style={{marginBottom:30}}>
                  Use this app to create a "critical path" schedule for you and
                  your crew. It doesnt need to be exact the schedule, but instead
                  use it to provide a north star on you screen saver
                </Text>

                <Button onPress={Actions.home}><Text>Get Started</Text></Button>
              </Content>

            </Container>
        );
    }
}
