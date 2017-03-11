import React, { Component } from 'react';

import Dashboard from './Dashboard';
import Routes from '../../config/routes';

class DashboardContainer extends Component {


  render() {

    const { navigator, recommendations} = this.props;

    return (
      <Dashboard
        {...this.props}
        onNewRecPress={() => navigator.push(Routes.getHelloRoute())}
      />
      )

  }
}

export default DashboardContainer;
