
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from '../../reducers/app/actions';
import * as EventsActions from '../../reducers/events/actions';
import QueenContainer from './QueenContainer';

const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};

export default connect(mapStateToProps, { ...AppActions, ...EventsActions })(QueenContainer);
