import React from 'react';
import { View, Text } from 'react-native';
// Redux instead of passing a func to determine if this should show
import { connect } from 'react-redux';

import Routes from '../../config/routes';
import styles from './styles';

const PreviewButton = ({ navigator, day, mySchedule }) => {
  return (
      <Text onPress={()=>navigator.push(Routes.getPreviewRoute(day))} >Preview {mySchedule.length}</Text>
  );
}

const mapStateToProps = (state) => {
  return {
    mySchedule: state.events.mySchedule
  };
};

export default connect(mapStateToProps)(PreviewButton)
// export default PreviewButton;
