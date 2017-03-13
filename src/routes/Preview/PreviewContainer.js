import React, { Component } from 'react';
// import { ListView } from 'react-native';
import moment from 'moment';
import _ from 'lodash';

import Preview from './Preview';
import Routes from '../../config/routes';


class PreviewContainer extends Component {

  componentWillMount() {

    const { mySchedule, day } = this.props;
    console.log(day)
    const daySchedule = _.filter(mySchedule,({start}) => { return moment(start).format('dddd') == day});
    const sortedSchedule = _.sortBy(daySchedule,(event) =>{ return event.start})
    this.setState({daySchedule: sortedSchedule})
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
