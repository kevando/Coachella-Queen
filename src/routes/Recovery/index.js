import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import RecoveryContainer from './RecoveryContainer';
import * as AppActions from '../../reducers/app/actions';
import * as EventsActions from '../../reducers/events/actions';

const mapStateToProps = (state) => {
  return {
    app: state.app,
    dataLoaded: state.events.smartSchedule.length > 0 ? true : false,
  };
};

export default connect(mapStateToProps, { ...AppActions, ...EventsActions })(RecoveryContainer);
