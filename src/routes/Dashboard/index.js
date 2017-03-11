import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DashboardContainer from './DashboardContainer';
import * as AppActions from '../../reducers/app/actions';

const mapStateToProps = (state) => {
  return {
    // recommendations: state.recommendations.list,
    app: state.app,
  };
};

// export default connect(mapStateToProps, {...AppActions, ...RecActions})(DashboardContainer);
export default connect(mapStateToProps, { ...AppActions })(DashboardContainer);
