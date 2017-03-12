import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PreviewContainer from './PreviewContainer';
import * as EventActions from '../../reducers/events/actions';

const mapStateToProps = (state) => {
  return {
    // schedule: state.events.schedule,
    mySchedule: state.events.mySchedule,
    // app: state.app,
  };
};

// export default connect(mapStateToProps, {...AppActions, ...RecActions})(DashboardContainer);
export default connect(mapStateToProps, { ...EventActions })(PreviewContainer);
