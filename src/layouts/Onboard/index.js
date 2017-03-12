
import React, {Component} from 'react';
import ExNavigator from '@exponent/react-native-navigator';
import Routes from '../../config/routes';
import styles from './styles';

const Onboard = (props) => {

  const sceneStyle = [];
  // sceneStyle.push({ paddingTop: 64 });

  // const initialRoute = Routes.getPreviewRoute();
  const initialRoute = Routes.getHelloRoute();

  return (
    <ExNavigator
      initialRoute={initialRoute}
      style={{ flex: 1 }}
      navigationBarStyle={styles.navBar}
      sceneStyle={sceneStyle}
      showNavigationBar={true}
    />
  );

}


export default Onboard;
