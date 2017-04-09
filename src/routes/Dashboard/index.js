import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DashboardContainer from './DashboardContainer';
import * as EventsActions from '../../reducers/events/actions';
import * as AppActions from '../../reducers/app/actions';

const mapStateToProps = (state) => {
  return {
    // schedule: state.events.schedule,
    mySchedule: state.events.mySchedule,
    // coachellaSchedule: state.events.coachellaSchedule,
    smartSchedule: state.events.smartSchedule,
    app: state.app,
  };
};

export default connect(mapStateToProps, { ...EventsActions, ...AppActions })(DashboardContainer);
