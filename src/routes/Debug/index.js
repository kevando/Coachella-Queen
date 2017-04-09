import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DebugContainer from './DebugContainer';
import * as EventsActions from '../../reducers/events/actions';
import * as AppActions from '../../reducers/app/actions';

const mapStateToProps = (state) => {
  return {
    smartSchedule: state.events.smartSchedule,
    mySchedule: state.events.mySchedule,
    app: state.app,
  };
};

export default connect(mapStateToProps, { ...EventsActions, ...AppActions })(DebugContainer);
