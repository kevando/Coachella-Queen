import React from 'react';
import ExNavigator from '@exponent/react-native-navigator';

import Dashboard from '../routes/Dashboard';
// import InputTitle from '../routes/InputTitle';
// import InputFriend from '../routes/InputFriend';
// import ConfirmRecommendation from '../routes/ConfirmRecommendation';
// import Debug from '../routes/Debug';
import Hello from '../routes/Hello';

// import * as Nav from '../components/Nav';



export const routes = {

  // -----------------------------------------
  //    DASHBOARD
  // -----------------------------------------

  getDashboardRoute() {
    return {
      renderScene(navigator) {
        return <Dashboard navigator={navigator} />;
      },

      // renderTitle(navigator) {
      //   return (
      //     <Nav.DashboardTitle title="Dashboard" navigator={navigator} />
      //   );
      // },

    };
  },

  // -----------------------------------------
  //    NEW RECOMMENDATION
  // -----------------------------------------

  // getNewRecommendationRoute() {
  //   return {
  //     renderScene(navigator) {
  //       return <InputTitle navigator={navigator} />;
  //     },
  //
  //     renderLeftButton(navigator) {
  //       return <Nav.Button text="Close" onPress={() => navigator.pop() } />
  //     },
  //
  //     configureScene(){
  //       return ExNavigator.SceneConfigs.FloatFromBottom
  //     },
  //
  //   };
  // },



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
