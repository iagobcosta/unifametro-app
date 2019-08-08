import React from 'react'
import {Provider} from 'react-redux'
import {AppRegistry} from 'react-native'
import Navigator from './src/Navigator'
import {name as appName} from './app.json'
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Module RCTImageLoader requires',    
  ]);


import storeConfig from './src/store/storeConfig'

const store = storeConfig()

const Redux = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
