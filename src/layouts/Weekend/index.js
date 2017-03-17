
import React, {Component} from 'react';
import ExNavigator from '@exponent/react-native-navigator';
import TabNavigator from 'react-native-tab-navigator';
import LinearGradient from 'react-native-linear-gradient';

import Routes from '../../config/routes';
import { navStyles, tabStyles } from './styles';

const grassGradient = {
  colors: ['#4f7b2b', '#70881b', '#366f31'],
  locations: [0.2,0.3,0.5],
}

class Weekend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Friday',
    };
  }

  renderTabItem(title, initialRoute) {
    const { selectedTab } = this.state;
    const sceneStyle = [];
    if (initialRoute.showNavigationBar !== false) {
      sceneStyle.push({ paddingTop: 64,backgroundColor: '#7dcdce' });
    }

    return (
      <TabNavigator.Item
        selected={selectedTab === title}
        title={title}
        {...tabStyles}

        onPress={() => this.setState({ selectedTab: title })}
      >
        <ExNavigator
          initialRoute={initialRoute}
          {...navStyles}
          sceneStyle={sceneStyle}
          showNavigationBar={initialRoute.showNavigationBar}
        />
      </TabNavigator.Item>
    );
  }

  render() {
    return (
      
      <TabNavigator {...tabStyles} >
        {this.renderTabItem('Friday', Routes.getDashboardRoute('Friday'))}
        {this.renderTabItem('Saturday', Routes.getDashboardRoute('Saturday'))}
        {this.renderTabItem('Sunday', Routes.getDashboardRoute('Sunday'))}

      </TabNavigator>

    );
  }
}


export default Weekend;
