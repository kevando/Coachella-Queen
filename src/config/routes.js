import React from 'react';
import {Text} from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';

import { Debug, Hello, Dashboard, Preview, } from '../routes';
import { PreviewButton } from '../components';
import * as Nav from '../components/Nav';

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

      renderLeftButton(navigator) {
        return <Nav.Button navigator={navigator} text='Debug' />
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
      getBackButtonTitle() {
        return 'Back'
      },
      // renderRightButton(navigator) {
      //   return <Nav.Button text="" onPress={() => navigator.pop() } />
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

  // -----------------------------------------
  //    DEBUG
  // -----------------------------------------

  getDebugRoute() {
    return {
      renderScene(navigator) {
        return <Debug navigator={navigator} />;
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
