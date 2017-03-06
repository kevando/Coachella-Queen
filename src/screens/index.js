import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';

import Welcome from './Welcome';
import Home from './Home';
import Preview from './Preview';

export const scenes = Actions.create(
  <Scene key="root">
    <Scene key="welcome" component={Welcome} title="Welcome" initial />
    <Scene key="home" component={Home} title="Coachella Queen" />
    <Scene key="preview" component={Preview} title="Schedule Preview" />
  </Scene>
);
