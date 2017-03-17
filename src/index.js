
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
      layout: null,
    };
  }

  onStoreConfigure() {
    const store = this.state.store.getState();
    this.setState({
      isLoading: false,
      layout: store.app.onboarding.hello.show ? <Onboard /> : <Weekend />
    });
  }

  handleChange() {
    // This might run too many times
    console.log('handleChange');
    const reduxStore = this.state.store.getState();

    if(reduxStore.app.onboarding.hello.show == false)
      this.setState({ layout: <Weekend /> });

    if(reduxStore.app.initialized == false) // on app reset
      this.setState({ layout: <Onboard /> });
  }

  render() {
   if (this.state.isLoading) return null; // Do nothing until store is loaded

   let unsubscribe = this.state.store.subscribe(this.handleChange.bind(this))

   const Layout = this.state.layout;

   return (
     <Provider store={this.state.store}>
       {Layout}
     </Provider>
   );
  }
}

export default App;
