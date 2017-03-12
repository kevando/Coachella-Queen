import React from 'react';
import ExNavigator from '@exponent/react-native-navigator';

import Dashboard from '../routes/Dashboard';
import Hello from '../routes/Hello';
import Preview from '../routes/Preview';
import { PreviewButton } from '../components';

export const routes = {

  // -----------------------------------------
  //    DASHBOARD
  // -----------------------------------------

  getDashboardRoute(day) {
    return {
      renderScene(navigator) {
        return <Dashboard navigator={navigator} day={day} />;
      },
      getTitle() {
        if(day == 'Friday')   return 'April 14th, 2017';
        if(day == 'Saturday') return 'April 15th, 2017';
        if(day == 'Sunday')   return 'April 16th, 2017';
        return 'Dashboard';
      },
      renderRightButton(navigator) {
        return <PreviewButton navigator={navigator} day={day} />
      },

      // renderTitle(navigator) {
      //   return (
      //     <Nav.DashboardTitle title="Dashboard" navigator={navigator} />
      //   );
      // },

    };
  },

  // -----------------------------------------
  //    PREVIEW SCHEDULE
  // -----------------------------------------

  getPreviewRoute(day) {
    return {
      renderScene(navigator) {
        return <Preview navigator={navigator} day={day} />;
      },
      // renderLeftButton(navigator) {
      //   return <Nav.Button text="Close" onPress={() => navigator.pop() } />
      // },
      //
      // configureScene(){
      //   return ExNavigator.SceneConfigs.FloatFromBottom
      // },

    };
  },



  // -----------------------------------------
  //    HELLO
  // -----------------------------------------

  getHelloRoute() {
    return {
      renderScene(navigator) {
        return <Hello navigator={navigator} />;
      },
      // @todo change this, user can still click button
      // renderTitle(navigator) {
      //   return (
      //     <Nav.DashboardTitle title="" navigator={navigator} />
      //   );
      // },
      // @todo change this, user can still click button
      // renderLeftButton(navigator) {
      //   return <Nav.Button text="" onPress={() => navigator.pop() } />
      // },
    };
  },

};

export default routes;
