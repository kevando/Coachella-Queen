import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DashboardContainer from './DashboardContainer';
import * as EventsActions from '../../reducers/events/actions';

const mapStateToProps = (state) => {
  return {
    schedule: state.events.schedule,
    mySchedule: state.events.mySchedule,
    coachellaSchedule: state.events.coachellaSchedule,
    app: state.app,
  };
};

export default connect(mapStateToProps, { ...EventsActions })(DashboardContainer);
