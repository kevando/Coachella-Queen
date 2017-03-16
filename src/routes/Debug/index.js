import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DebugContainer from './DebugContainer';
import * as EventsActions from '../../reducers/events/actions';

const mapStateToProps = (state) => {
  return {
    firebaseData: state.events.firebaseData,
    app: state.app,
  };
};

export default connect(mapStateToProps, { ...EventsActions })(DebugContainer);
