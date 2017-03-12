import React, { Component } from 'react';
// import { ListView } from 'react-native';
import moment from 'moment';
import _ from 'lodash';

import Preview from './Preview';
import Routes from '../../config/routes';

const schedule = [
  {"name":"The Lemon Twigs","short":"lemont(1)","start":"2017-04-14 14:45","end":"2017-04-14 15:15","stage":"Coachella"},
  {"name":"The Interrupters","short":"interr(1)","start":"2017-04-14 15:40","end":"2017-04-14 16:15","stage":"Coachella"},
  {"name":"Capital Cities","short":"capita(1)","start":"2017-04-14 16:40","end":"2017-04-14 17:30","stage":"Coachella"},
  {"name":"Mac DeMarco","short":"macdem(1)","start":"2017-04-14 17:55","end":"2017-04-14 18:45","stage":"Coachella"},
  {"name":"Father John Misty","short":"father(1)","start":"2017-04-14 19:10","end":"2017-04-14 20:00","stage":"Coachella"},
];

class PreviewContainer extends Component {

  componentWillMount() {

    const { mySchedule, day } = this.props;
    console.log(day)
    const daySchedule = _.filter(mySchedule,({start}) => { return moment(start).format('dddd') == day})
    this.setState({daySchedule})
  }

  render() {

    const { navigator } = this.props;

    return (
      <Preview
        {...this.props}
        {...this.state}
        onNewRecPress={() => navigator.push(Routes.getHelloRoute())}
      />
      )

  }
}

export default PreviewContainer;
