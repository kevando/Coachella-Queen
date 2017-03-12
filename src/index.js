
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import configureStore from './config/store';

import Onboard from './layouts/Onboard';
import Weekend from './layouts/Weekend';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
   if (this.state.isLoading) return null; // Do nothing until store is loaded

   const reduxStore = this.state.store.getState();

   const Layout = reduxStore.app.onboarded ? <Weekend /> : <Onboard />

   return (
     <Provider store={this.state.store}>
       <Weekend />
     </Provider>
   );
  }
}

export default App;
