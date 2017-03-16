import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HelloContainer from './HelloContainer';
import * as AppActions from '../../reducers/app/actions';
import * as EventsActions from '../../reducers/events/actions';

const mapStateToProps = (state) => {
  return {
    app: state.app,
    // onboardStep: state.app.onboarding.hello
  };
};

export default connect(mapStateToProps, { ...AppActions, ...EventsActions })(HelloContainer);
