// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthStack from './AuthNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    Welcome: WelcomeScreen
  }, {
    initialRouteName: 'Welcome'
  })
);
