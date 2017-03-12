import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DashboardContainer from './DashboardContainer';
import * as EventsActions from '../../reducers/events/actions';

const mapStateToProps = (state) => {
  return {
    schedule: state.events.schedule,
    mySchedule: state.events.mySchedule,
  };
};

export default connect(mapStateToProps, { ...EventsActions })(DashboardContainer);
