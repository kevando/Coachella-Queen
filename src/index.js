import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './config/store';
import Queen from './layouts/Queen';


var Mixpanel = require('react-native-mixpanel');
Mixpanel.sharedInstanceWithToken('75619e5c47ce83defe28797a23bb308f');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: configureStore(() => this.onStoreConfigure() ),
    };
  }

  onStoreConfigure() {
    // callback() after Redux store loads from async storage
    this.setState({ isLoading: false });
  }

  render() {
   if (this.state.isLoading) return null; // Do nothing until store is loaded

   return (
     <Provider store={this.state.store}>
       <Queen />
     </Provider>
   );
  }
}

export default App;
