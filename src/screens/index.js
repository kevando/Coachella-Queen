import React from 'react';
import { Text,StatusBar } from 'react-native'
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux';

import Welcome from './Welcome';
import Selection from './Selection';
import Preview from './Preview';

import Error from '../components/Error'; // Not used yet



class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? '#fff' :'#ccc'}}>{this.props.tabTitle}</Text>
        );
    }
}

export const scenes = Actions.create(
  <Scene key="modal" >


    <Scene key="root" hideNavBar={true}>

      <Scene key="welcome" component={Welcome} title="Welcome" hideNavBar={true} initial />
      <Scene key="preview" component={Preview} title="Preview" hideNavBar={false}  />

        <Scene key="home" tabs={true} initial >
            <Scene key="friday" component={Selection} title="April 14th, 2017" tabTitle="Friday" icon={TabIcon} />
            <Scene key="saturday" component={Selection} title="April 15th, 2017" tabTitle="Saturday" icon={TabIcon}/>
            <Scene key="sunday" component={Selection} title="April 16th, 2017" tabTitle="Sunday" icon={TabIcon}/>
        </Scene>

      </Scene>

    <Scene key="error" component={Error}/>

  </Scene>
);


// export const scenesNoTabs = Actions.create(
//   <Scene key="root">
//     <Scene key="welcome" component={Welcome} title="Welcome" hideNavBar={true} />
//     <Scene key="home" component={Home} title="Coachella Queen" hideNavBar={false} initial tabs={true} />
//     <Scene key="preview" component={Preview} title="Schedule Preview" />
//   </Scene>
// );
