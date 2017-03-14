
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
      // Load the Redux store from Async Storage
      store: configureStore(() => this.onStoreConfigure() ),
      onboarded: false,
    };
  }

  onStoreConfigure() {
    this.setState({ isLoading: false });
    const store = this.state.store.getState();
    this.setState({onboarded: store.app.onboarded});
  }

  handleChange() {
    const reduxStore = this.state.store.getState();
    if(this.state.onboarded == false && reduxStore.app.onboarded == true)
      this.setState({onboarded: true});
  }

  render() {
   if (this.state.isLoading) return null; // Do nothing until store is loaded

   let unsubscribe = this.state.store.subscribe(this.handleChange.bind(this))

   return (
     <Provider store={this.state.store}>
       {this.state.onboarded ? <Weekend /> : <Onboard />}
     </Provider>
   );
  }
}

export default App;
