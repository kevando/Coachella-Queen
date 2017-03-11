import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HelloContainer from './HelloContainer';
import * as AppActions from '../../reducers/app/actions';

const mapStateToProps = (state) => {
  return {
    // recommendations: state.recommendations.list,
    app: state.app,
  };
};

// export default connect(mapStateToProps, {...AppActions, ...RecActions})(DashboardContainer);
export default connect(mapStateToProps, { ...AppActions })(HelloContainer);
