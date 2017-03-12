import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DashboardContainer from './DashboardContainer';
import * as AppActions from '../../reducers/app/actions';

const mapStateToProps = (state) => {
  return {
    schedule: state.events.schedule,
    mySchedule: state.events.mySchedule,
    app: state.app,
  };
};

// export default connect(mapStateToProps, {...AppActions, ...RecActions})(DashboardContainer);
export default connect(mapStateToProps, { ...AppActions })(DashboardContainer);
