
import React, {Component} from 'react';
import ExNavigator from '@exponent/react-native-navigator';
import TabNavigator from 'react-native-tab-navigator';
import Routes from '../../config/routes';
import styles from './styles';

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
      sceneStyle.push({ paddingTop: 64 });
    }

    return (
      <TabNavigator.Item
        selected={selectedTab === title}
        title={title}
        {...styles}

        onPress={() => this.setState({ selectedTab: title })}
      >
        <ExNavigator
          initialRoute={initialRoute}
          style={{ flex: 1 }}
          {...styles}
          sceneStyle={sceneStyle}
          showNavigationBar={initialRoute.showNavigationBar}
        />
      </TabNavigator.Item>
    );
  }

  render() {
    return (
      <TabNavigator {...styles} >
        {this.renderTabItem('Friday', Routes.getDashboardRoute('Friday'))}
        {this.renderTabItem('Saturday', Routes.getDashboardRoute('Saturday'))}
        {this.renderTabItem('Sunday', Routes.getDashboardRoute('Sunday'))}
      </TabNavigator>
    );
  }
}


export default Weekend;
